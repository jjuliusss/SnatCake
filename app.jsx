import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, getDoc, onSnapshot, addDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { Camera, Send, Image as ImageIcon, Smile, Lock, X, Video, Upload, ShieldCheck, AlertCircle, LogOut, Users, Plus, ArrowLeft, MessageSquare, UserPlus, Info, Check, Search, XCircle, Clock } from 'lucide-react';

const backgroundStyles = `
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  .floating-icon {
    position: absolute;
    animation: float 6s ease-in-out infinite;
    opacity: 0.6;
    pointer-events: none;
    z-index: 0;
  }
`;

const FloatingBackground = () => (
  <>
    <style>{backgroundStyles}</style>
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="floating-icon text-4xl" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>🐍</div>
      <div className="floating-icon text-5xl" style={{ top: '20%', right: '15%', animationDelay: '1s' }}>💖</div>
      <div className="floating-icon text-4xl" style={{ top: '45%', left: '20%', animationDelay: '2s' }}>😘</div>
      <div className="floating-icon text-3xl" style={{ bottom: '30%', left: '15%', animationDelay: '3s' }}>😶‍🌫️</div>
      <div className="floating-icon text-5xl" style={{ bottom: '15%', right: '10%', animationDelay: '4s' }}>🐱</div>
      <div className="floating-icon text-4xl" style={{ top: '70%', left: '40%', animationDelay: '1.5s' }}>💕</div>
      <div className="floating-icon text-4xl" style={{ top: '30%', right: '40%', animationDelay: '0.5s' }}>🥰</div>
      <div className="floating-icon text-5xl" style={{ bottom: '40%', right: '30%', animationDelay: '2.5s' }}>💝</div>
    </div>
  </>
);

// --- FIREBASE INITIALIZATION ---
const USER_CONFIG = {
  apiKey: "AIzaSyDjW_vAnECSuiMz2UHoe01XYOKZaXXXRts",
  authDomain: "nemoth.firebaseapp.com",
  projectId: "nemoth",
  storageBucket: "nemoth.firebasestorage.app",
  messagingSenderId: "285654880117",
  appId: "1:285654880117:web:70d79d1fce27d1ffeccd3c"
};

const isCustomConfigValid = USER_CONFIG.apiKey && USER_CONFIG.apiKey !== "YOUR_API_KEY";
const firebaseConfig = isCustomConfigValid
  ? USER_CONFIG
  : (typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {});

const canvasAppId = typeof __app_id !== 'undefined' ? __app_id : 'secure-chat';

let app, auth, db;
try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (error) {
  console.error("Lỗi khởi tạo Firebase: Vui lòng điền đúng firebaseConfig.");
}

const encodeData = (str) => btoa(encodeURIComponent(str));
const decodeData = (str) => {
  try { return decodeURIComponent(atob(str)); }
  catch (e) { return str; }
};
const hashData = async (str) => {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
};

const getRoomsCollection = () => isCustomConfigValid ? collection(db, 'chat_rooms') : collection(db, 'artifacts', canvasAppId, 'public', 'data', 'chat_rooms');
const getMessagesCollection = () => isCustomConfigValid ? collection(db, 'secure_messages') : collection(db, 'artifacts', canvasAppId, 'public', 'data', 'secure_messages');
const getStickersCollection = () => isCustomConfigValid ? collection(db, 'custom_stickers') : collection(db, 'artifacts', canvasAppId, 'public', 'data', 'custom_stickers');
const getDirectoryCollection = () => isCustomConfigValid ? collection(db, 'user_directory') : collection(db, 'artifacts', canvasAppId, 'public', 'data', 'user_directory');
const getUserProfileDoc = (username) => isCustomConfigValid ? doc(db, 'users', encodeData(username)) : doc(db, 'artifacts', canvasAppId, 'users', encodeData(username), 'user_profile', 'main');
const getLogsCollection = () => isCustomConfigValid ? collection(db, 'activity_logs') : collection(db, 'artifacts', canvasAppId, 'public', 'data', 'activity_logs');

const logActivity = async (action, username, details = {}) => {
  if (!db) return;
  try {
    await addDoc(getLogsCollection(), { action, username: encodeData(username), details, timestamp: Date.now() });
  } catch (err) {}
};

const LOCK_TIMEOUT_MS = 30 * 60 * 1000;
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const MAX_VIDEO_SIZE = 24 * 1024 * 1024;

const COMMON_EMOJIS = [
  '😀','😃','😄','😁','😆','😅','😂','🤣','🥲','☺️','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🥸','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠',
  '❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟',
  '👍','👎','👏','🙌','👐','🤲','🤝','🙏','✌️','🤞','🖖','🤘','🤙','🖐','✋','👌','🤌','🤏','👈','👉','👆','👇','☝️','✊','👊','🤛','🤜','🤚','👋','🤟',
  '🔥','🎉','✨','🌟','💫','💥','💢','💦','💨','💤','💩','👻','💀','👽','👾','🤖','🎃','😺','😸','😹','😻','😼','😽','🙀','😿','😾'
];

const playAlarmSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.setValueAtTime(600, ctx.currentTime + 0.2);
    osc.frequency.setValueAtTime(800, ctx.currentTime + 0.4);
    osc.frequency.setValueAtTime(600, ctx.currentTime + 0.6);
    osc.frequency.setValueAtTime(800, ctx.currentTime + 0.8);
    osc.frequency.setValueAtTime(600, ctx.currentTime + 1.0);
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.5);
  } catch (e) {}
};

export default function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLocked, setIsLocked] = useState(true);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [customStickers, setCustomStickers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  
  const [showCamera, setShowCamera] = useState(false);
  const [showStickers, setShowStickers] = useState(false);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [notification, setNotification] = useState('');
  
  const [previewImage, setPreviewImage] = useState(null);

  const [visibleDaysCount, setVisibleDaysCount] = useState(1);
  const chatContainerRef = useRef(null);
  const scrollDataRef = useRef({ oldHeight: 0, isLoadingMore: false });

  const messagesEndRef = useRef(null);
  const idleTimer = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const bgInputRef = useRef(null);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      setErrorMsg("Chưa cấu hình Firebase Web SDK hợp lệ.");
      return;
    }
    const initAuth = async () => {
      try {
        if (!isCustomConfigValid && typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) {
        setLoading(false);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const lockApp = () => {
    setIsLocked(true);
    setMessages([]); 
    setCurrentRoom(null);
    showNotification("Ứng dụng đã tự động khóa để bảo mật.");
  };

  const logoutApp = () => {
    setProfile(null);
    setIsLocked(true);
    setMessages([]);
    setCurrentRoom(null);
  };

  const resetIdleTimer = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => { lockApp(); }, LOCK_TIMEOUT_MS);
  };

  useEffect(() => {
    if (!isLocked && profile) {
      window.addEventListener('mousemove', resetIdleTimer);
      window.addEventListener('keydown', resetIdleTimer);
      window.addEventListener('click', resetIdleTimer);
      window.addEventListener('scroll', resetIdleTimer);
      resetIdleTimer();
      return () => {
        window.removeEventListener('mousemove', resetIdleTimer);
        window.removeEventListener('keydown', resetIdleTimer);
        window.removeEventListener('click', resetIdleTimer);
        window.removeEventListener('scroll', resetIdleTimer);
        if (idleTimer.current) clearTimeout(idleTimer.current);
      };
    }
  }, [isLocked, profile]);

  useEffect(() => {
    setVisibleDaysCount(1);
    scrollDataRef.current = { oldHeight: 0, isLoadingMore: false };
  }, [currentRoom?.id]);

  useEffect(() => {
    if (!user || !db || isLocked || !profile) return;
    const unsubDir = onSnapshot(getDirectoryCollection(), (snapshot) => {
      setAllUsers(snapshot.docs.map(doc => decodeData(doc.id)));
    });
    const unsubscribeRooms = onSnapshot(getRoomsCollection(), (snapshot) => {
      const allRooms = snapshot.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data, allowedUsers: data.allowedUsers ? data.allowedUsers.map(decodeData) : [], createdBy: data.createdBy ? decodeData(data.createdBy) : 'Unknown' };
      });
      const myRooms = allRooms.filter(r => r.allowedUsers.includes(profile.username));
      myRooms.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setRooms(myRooms);
      setCurrentRoom(prev => prev ? (myRooms.find(r => r.id === prev.id) || prev) : prev);
    });
    return () => { unsubDir(); unsubscribeRooms(); };
  }, [user, isLocked, profile, db]);

  useEffect(() => {
    if (!user || !db || isLocked) {
      if (isLocked && messages.length > 0) setMessages([]);
      return; 
    }
    const unsubscribeStickers = onSnapshot(getStickersCollection(), (snapshot) => setCustomStickers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
    let unsubscribeMessages = () => {};
    if (currentRoom) {
      unsubscribeMessages = onSnapshot(getMessagesCollection(), (snapshot) => {
        const allMsgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), senderName: doc.data().senderName ? decodeData(doc.data().senderName) : 'Unknown' }));
        const roomMsgs = allMsgs.filter(m => m.roomId === currentRoom.id).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
        setMessages(roomMsgs);
      });
    }
    return () => { unsubscribeStickers(); unsubscribeMessages(); };
  }, [user, isLocked, currentRoom, db]);

  const uniqueDays = [...new Set(messages.map(m => new Date(m.timestamp).setHours(0,0,0,0)))].sort((a,b) => b - a);
  const visibleDays = uniqueDays.slice(0, visibleDaysCount);
  const displayedMessages = messages.filter(m => visibleDays.includes(new Date(m.timestamp).setHours(0,0,0,0)));

  const formatDayLabel = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
    if (date.toDateString() === today.toDateString()) return 'Hôm nay';
    if (date.toDateString() === yesterday.toDateString()) return 'Hôm qua';
    return date.toLocaleDateString('vi-VN');
  };

  let groupedMessages = [];
  let currentDayLabel = '';
  displayedMessages.forEach(msg => {
    const dayLabel = formatDayLabel(msg.timestamp);
    if (dayLabel !== currentDayLabel) {
      groupedMessages.push({ type: 'divider', label: dayLabel, id: `div-${dayLabel}-${msg.timestamp}` });
      currentDayLabel = dayLabel;
    }
    groupedMessages.push({ type: 'message', ...msg });
  });

  const handleChatScroll = (e) => {
    if (e.target.scrollTop === 0 && visibleDaysCount < uniqueDays.length) {
      scrollDataRef.current = { oldHeight: e.target.scrollHeight, isLoadingMore: true };
      setVisibleDaysCount(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (!chatContainerRef.current) return;
    if (scrollDataRef.current.isLoadingMore) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight - scrollDataRef.current.oldHeight;
      scrollDataRef.current.isLoadingMore = false;
    } else {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [displayedMessages.length]);

  const showNotification = (msg) => { setNotification(msg); setTimeout(() => setNotification(''), 3000); };

  const handleCreateRoom = async (name, participantsList) => {
    let users = [...participantsList];
    if (!users.includes(profile.username)) users.push(profile.username);
    try {
      const roomRef = await addDoc(getRoomsCollection(), { name: name.trim(), allowedUsers: users.map(encodeData), createdAt: Date.now(), createdBy: encodeData(profile.username) });
      await logActivity('CREATE_ROOM', profile.username, { roomName: encodeData(name.trim()), roomId: roomRef.id });
      await addDoc(getMessagesCollection(), { roomId: roomRef.id, senderId: 'system', senderName: encodeData('Hệ thống'), text: `Tổ chat "${name.trim()}" được tạo bởi ${profile.username}.`, isSystem: true, timestamp: Date.now() });
      showNotification("Đã tạo Tổ chat mới!");
    } catch(err) { showNotification("Lỗi khi tạo Tổ."); }
  };

  const handleAddMember = async (newMember) => {
    if (!currentRoom || !newMember) return;
    try {
      await updateDoc(doc(getRoomsCollection(), currentRoom.id), { allowedUsers: arrayUnion(encodeData(newMember)) });
      await addDoc(getMessagesCollection(), { roomId: currentRoom.id, senderId: 'system', senderName: encodeData('Hệ thống'), text: `${profile.username} đã thêm thành viên "${newMember}" vào Tổ chat.`, isSystem: true, timestamp: Date.now() });
      await logActivity('ADD_MEMBER', profile.username, { roomId: currentRoom.id, addedUser: encodeData(newMember) });
      showNotification(`Đã thêm ${newMember} vào Tổ!`);
    } catch (err) { showNotification("Lỗi khi thêm thành viên."); }
  };

  const handleSendMessage = async (text, mediaUrl = null, mediaType = null) => {
    if ((!text.trim() && !mediaUrl) || isLocked || !profile || !user || !currentRoom) return;
    setShowStickers(false); setShowAttachmentMenu(false);
    try {
      await addDoc(getMessagesCollection(), { roomId: currentRoom.id, senderId: encodeData(profile.username), senderName: encodeData(profile.username), text: text.trim(), mediaUrl, mediaType, timestamp: Date.now() });
      setNewMessage(''); resetIdleTimer();
    } catch (err) { showNotification("Không thể gửi tin nhắn. Có thể vượt dung lượng."); }
  };

  const handleBgUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !currentRoom) return;
    if (file.size > MAX_IMAGE_SIZE) return showNotification(`Ảnh nền quá lớn.`);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        let width = img.width, height = img.height;
        const MAX_DIM = 1920; 
        if (width > height && width > MAX_DIM) { height *= MAX_DIM / width; width = MAX_DIM; } 
        else if (height > MAX_DIM) { width *= MAX_DIM / height; height = MAX_DIM; }
        canvas.width = width; canvas.height = height;
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        try {
          await updateDoc(doc(getRoomsCollection(), currentRoom.id), { bgUrl: canvas.toDataURL('image/jpeg', 0.6) });
          showNotification("Đã thay đổi hình nền phòng chat!");
        } catch (err) {}
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  };

  const handleFileUpload = (e, type) => {
    const file = e.target ? e.target.files[0] : e.files?.[0];
    if (!file) return;
    if (type === 'video') {
      if (file.size > MAX_VIDEO_SIZE) return showNotification(`Video quá lớn.`);
      const reader = new FileReader();
      reader.onloadend = () => handleSendMessage('', reader.result, type);
      reader.readAsDataURL(file);
    } else if (type === 'image') {
      if (file.size > MAX_IMAGE_SIZE) return showNotification(`Ảnh quá lớn.`);
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width, height = img.height;
          const MAX_DIM = 1200;
          if (width > height && width > MAX_DIM) { height *= MAX_DIM / width; width = MAX_DIM; } 
          else if (height > MAX_DIM) { width *= MAX_DIM / height; height = MAX_DIM; }
          canvas.width = width; canvas.height = height;
          canvas.getContext('2d').drawImage(img, 0, 0, width, height);
          setPreviewImage(canvas.toDataURL('image/jpeg', 0.7));
          setShowAttachmentMenu(false);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
    if (e.target) e.target.value = null;
  };

  const handlePaste = (e) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) { e.preventDefault(); handleFileUpload({ files: [file] }, 'image'); return; }
      }
    }
  };

  const uploadCustomSticker = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        let width = img.width, height = img.height;
        const MAX_DIM = 300;
        if (width > height && width > MAX_DIM) { height *= MAX_DIM / width; width = MAX_DIM; } 
        else if (height > MAX_DIM) { width *= MAX_DIM / height; height = MAX_DIM; }
        canvas.width = width; canvas.height = height;
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        try {
          await addDoc(getStickersCollection(), { url: canvas.toDataURL('image/png'), addedBy: profile.username, timestamp: Date.now() });
          showNotification("Đã tải lên sticker mới!");
        } catch (err) {}
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  };

  const openCamera = async () => {
    setShowCamera(true); setShowAttachmentMenu(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) { setShowCamera(false); }
  };

  const closeCamera = () => {
    if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
    setShowCamera(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth; canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setPreviewImage(canvas.toDataURL('image/jpeg', 0.7));
    closeCamera();
  };

  const onSendChat = () => {
    handleSendMessage(newMessage, previewImage, previewImage ? 'image' : null);
    setPreviewImage(null);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-pink-50 text-pink-500"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div></div>;
  if (!user) return <div className="min-h-screen flex items-center justify-center bg-pink-50"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-400"></div></div>;
  if (!profile) return <AuthScreen db={db} onComplete={(p) => setProfile(p)} />;
  if (isLocked) return <LockScreen profile={profile} onUnlock={() => setIsLocked(false)} onReset={() => setProfile(null)} />;

  return (
    <div className="h-[100dvh] w-full bg-gradient-to-br from-pink-100 via-white to-blue-100 text-gray-800 font-sans flex flex-col relative overflow-hidden">
      <FloatingBackground />
      <header className="sticky top-0 z-50 flex-shrink-0 bg-white/80 backdrop-blur-xl border-b-2 border-pink-200 p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          {currentRoom ? (
            <button onClick={() => { setCurrentRoom(null); setMessages([]); }} className="p-2 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-pink-500 border border-pink-200">
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : (
            <div className="bg-pink-100 p-2 rounded-xl border border-pink-200">
              <ShieldCheck className="text-pink-500 w-6 h-6" />
            </div>
          )}
          <div className={currentRoom ? "cursor-pointer hover:bg-white/50 p-1 px-2 rounded-xl transition-colors group" : ""} onClick={() => currentRoom && setShowMembersModal(true)}>
            <h1 className="text-lg font-bold text-gray-800 truncate max-w-[150px] sm:max-w-xs">{currentRoom ? currentRoom.name : 'Hang Chat'}</h1>
            <p className="text-xs text-pink-500 flex items-center gap-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
              {currentRoom ? <span className="group-hover:text-pink-600 transition-colors">{currentRoom.allowedUsers.length} thành viên (Nhấn xem)</span> : 'Hi Hi'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-right hidden sm:block group relative cursor-help">
            <p className="text-sm text-gray-500">Tài khoản:</p>
            <p className="font-semibold text-gray-800 group-hover:text-pink-500 transition-colors">{profile.username}</p>
            <div className="absolute top-full right-0 mt-2 w-56 bg-white border-2 border-pink-200 rounded-xl shadow-xl shadow-pink-200/50 p-3 hidden group-hover:block z-50">
              <p className="text-xs text-gray-500 mb-2 border-b border-pink-100 pb-1 font-bold">Lịch sử hoạt động</p>
              <div className="space-y-1 text-left">
                <p className="text-xs text-gray-500">Tạo tài khoản lúc:</p>
                <p className="text-xs font-mono text-pink-500 font-medium">{profile.createdAt ? new Date(profile.createdAt).toLocaleString('vi-VN') : 'Chưa rõ'}</p>
                <p className="text-xs text-gray-500 mt-2">Đăng nhập lần cuối:</p>
                <p className="text-xs font-mono text-blue-500 font-medium">{profile.lastLoginAt ? new Date(profile.lastLoginAt).toLocaleString('vi-VN') : 'Vừa xong'}</p>
              </div>
            </div>
          </div>
          {currentRoom && (
            <>
              <button onClick={() => bgInputRef.current?.click()} className="p-2 hover:bg-pink-50 rounded-full transition-colors text-gray-500 hover:text-pink-500 border border-transparent hover:border-pink-200" title="Đổi hình nền">
                <ImageIcon className="w-5 h-5" />
              </button>
              <input type="file" accept="image/*" className="hidden" ref={bgInputRef} onChange={handleBgUpload} />
            </>
          )}
          <button onClick={lockApp} className="p-2 hover:bg-pink-50 rounded-full transition-colors text-gray-500 hover:text-pink-500 border border-transparent hover:border-pink-200" title="Khóa Tổ">
            <Lock className="w-5 h-5" />
          </button>
          {!currentRoom && (
            <button onClick={logoutApp} className="p-2 hover:bg-red-50 rounded-full transition-colors text-gray-500 hover:text-red-500 border border-transparent hover:border-red-200" title="Đăng xuất">
              <LogOut className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {!currentRoom ? (
        <LobbyScreen rooms={rooms} onCreate={handleCreateRoom} onSelect={setCurrentRoom} profile={profile} allUsers={allUsers} />
      ) : (
        <div className="flex-1 relative overflow-hidden flex flex-col z-10">
          {currentRoom.bgUrl && <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none" style={{ backgroundImage: `url(${currentRoom.bgUrl})` }} />}
          <main ref={chatContainerRef} onScroll={handleChatScroll} className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4 opacity-70 mt-20">
                <MessageSquare className="w-16 h-16 text-pink-300" />
                <p className="font-medium">Bắt đầu cuộc trò chuyện bảo mật.</p>
              </div>
            ) : (
              <>
                {visibleDaysCount < uniqueDays.length && <div className="text-center text-[10px] font-bold text-pink-400 py-2 animate-pulse uppercase tracking-widest">Đang tải thêm lịch sử...</div>}
                {groupedMessages.map((item) => item.type === 'divider' ? (
                  <div key={item.id} className="flex justify-center my-6 relative z-10"><span className="bg-white/70 backdrop-blur-md text-pink-500 font-bold text-[10px] px-4 py-1.5 rounded-full border border-pink-200 shadow-sm uppercase tracking-widest">{item.label}</span></div>
                ) : <MessageBubble key={item.id} msg={item} isMine={item.senderId === encodeData(profile.username)} />)}
              </>
            )}
            <div ref={messagesEndRef} />
          </main>
          <footer className="relative z-20 flex-shrink-0 bg-white/80 backdrop-blur-xl p-4 border-t-2 border-pink-200">
            {showStickers && (
              <div className="absolute bottom-full mb-2 right-4 bg-white border-2 border-pink-200 rounded-2xl p-4 shadow-xl shadow-pink-200/30 w-80 max-h-80 overflow-y-auto flex flex-col gap-3">
                <div className="grid grid-cols-6 gap-2">{COMMON_EMOJIS.map(e => <button key={e} onClick={() => handleSendMessage(e, null, 'text')} className="text-2xl hover:bg-pink-50 p-1 rounded-xl transition-transform hover:scale-125 border border-transparent hover:border-pink-100">{e}</button>)}</div>
                {customStickers.length > 0 && <><div className="h-px bg-pink-100 w-full my-1" /><div className="grid grid-cols-4 gap-2">{customStickers.map(stk => <button key={stk.id} onClick={() => handleSendMessage('', stk.url, 'sticker')} className="hover:bg-pink-50 p-1 rounded-xl border border-transparent hover:border-pink-100"><img src={stk.url} alt="sticker" className="w-full h-auto object-contain rounded" /></button>)}</div></>}
                <label className="mt-2 flex items-center justify-center gap-2 bg-pink-50 hover:bg-pink-100 text-pink-500 font-bold p-3 rounded-xl cursor-pointer text-sm transition-colors border-2 border-pink-200">
                  <Upload className="w-4 h-4" /> Tải Sticker Lên <input type="file" accept="image/*" className="hidden" onChange={uploadCustomSticker} />
                </label>
              </div>
            )}
            {showAttachmentMenu && (
              <div className="absolute bottom-full mb-2 left-4 bg-white border-2 border-pink-200 rounded-2xl p-2 shadow-xl shadow-pink-200/30 flex flex-col gap-1 w-64">
                <label className="flex items-center gap-3 p-3 hover:bg-pink-50 text-gray-700 rounded-xl cursor-pointer transition-colors font-medium border border-transparent hover:border-pink-100"><ImageIcon className="text-blue-400 w-5 h-5 flex-shrink-0" /> <span className="text-sm">Gửi Hình</span><input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileUpload(e, 'image')} /></label>
                <label className="flex items-center gap-3 p-3 hover:bg-pink-50 text-gray-700 rounded-xl cursor-pointer transition-colors font-medium border border-transparent hover:border-pink-100"><Video className="text-purple-400 w-5 h-5 flex-shrink-0" /> <span className="text-sm">Gửi Video</span><input type="file" accept="video/*" className="hidden" onChange={(e) => handleFileUpload(e, 'video')} /></label>
                <button onClick={openCamera} className="flex items-center gap-3 p-3 hover:bg-pink-50 text-gray-700 rounded-xl text-left transition-colors font-medium border border-transparent hover:border-pink-100"><Camera className="text-pink-400 w-5 h-5 flex-shrink-0" /> <span className="text-sm">Chụp Webcam</span></button>
              </div>
            )}
            <div className="flex items-end gap-2 max-w-5xl mx-auto">
              <button onClick={() => { setShowAttachmentMenu(!showAttachmentMenu); setShowStickers(false); }} className={`p-3 rounded-full transition-colors ${showAttachmentMenu ? 'bg-pink-500 text-white shadow-md border-2 border-pink-500' : 'bg-white text-gray-500 hover:text-pink-500 hover:bg-pink-50 shadow-sm border-2 border-pink-200'}`}><Plus className="w-5 h-5" /></button>
              <button onClick={() => { setShowStickers(!showStickers); setShowAttachmentMenu(false); }} className={`p-3 rounded-full transition-colors ${showStickers ? 'bg-yellow-400 text-white shadow-md border-2 border-yellow-400' : 'bg-white text-gray-500 hover:text-yellow-500 hover:bg-yellow-50 shadow-sm border-2 border-pink-200'}`}><Smile className="w-5 h-5" /></button>
              <div className="flex-1 bg-white rounded-2xl flex flex-col justify-center p-1.5 border-2 border-pink-200 focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-200 shadow-sm transition-all">
                {previewImage && (
                  <div className="relative self-start mb-1 ml-2 mt-1">
                    <img src={previewImage} alt="preview" className="h-24 rounded-xl border border-pink-200 object-cover shadow-sm" />
                    <button onClick={() => setPreviewImage(null)} className="absolute -top-2 -right-2 bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 border border-pink-100 rounded-full p-1 shadow-md transition-colors"><X className="w-4 h-4" /></button>
                  </div>
                )}
                <div className="flex items-end w-full">
                  <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onSendChat(); } }} onPaste={handlePaste} placeholder="Nhập tin nhắn..." className="flex-1 bg-transparent text-gray-800 p-2 outline-none resize-none max-h-32 min-h-[44px]" rows={1} />
                  <button onClick={onSendChat} disabled={!newMessage.trim() && !previewImage} className="p-2 mb-1 mr-1 bg-pink-400 hover:bg-pink-500 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl transition-colors shadow-sm border border-transparent shrink-0"><Send className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
      {notification && <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white text-pink-500 font-bold px-6 py-3 rounded-full shadow-2xl border-2 border-pink-200 z-50 text-sm animate-fade-in-down flex items-center gap-2"><div className="w-2 h-2 bg-pink-400 rounded-full animate-ping"></div> {notification}</div>}
      {showMembersModal && currentRoom && <RoomMembersModal room={currentRoom} allUsers={allUsers} onClose={() => setShowMembersModal(false)} onAddMember={handleAddMember} />}
      {showCamera && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden border-2 border-pink-300 shadow-2xl shadow-pink-200">
            <div className="flex justify-between items-center p-5 border-b-2 border-pink-100"><h3 className="text-gray-800 font-bold flex items-center gap-2 text-lg"><Camera className="w-5 h-5 text-pink-400" /> Chụp Ảnh</h3><button onClick={closeCamera} className="text-gray-400 hover:text-pink-500 bg-pink-50 border border-pink-200 rounded-full p-2"><X className="w-5 h-5" /></button></div>
            <div className="relative bg-black aspect-video flex items-center justify-center"><video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" /></div>
            <div className="p-6 flex justify-center bg-gray-50 border-t-2 border-pink-100"><button onClick={capturePhoto} className="bg-pink-500 hover:bg-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center border-4 border-pink-200 shadow-lg active:scale-95"><Camera className="w-7 h-7" /></button></div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- SUB COMPONENTS ---

function LobbyScreen({ rooms, onCreate, onSelect, profile, allUsers }) {
  const [showCreate, setShowCreate] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roomName.trim()) return;
    onCreate(roomName, participants);
    setRoomName(''); setParticipants([]); setShowCreate(false);
  };

  return (
    <main className="flex-1 overflow-y-auto p-4 flex flex-col items-center relative z-10">
      <div className="w-full max-w-2xl space-y-6 mt-4">
        {!showCreate ? (
          <button onClick={() => setShowCreate(true)} className="w-full border-4 border-dashed border-pink-300 hover:border-pink-500 bg-white/50 hover:bg-white/80 rounded-[32px] p-8 flex flex-col items-center justify-center gap-3 transition-all text-pink-500 shadow-sm group">
            <div className="bg-pink-100 group-hover:bg-pink-200 p-4 rounded-full transition-colors border-2 border-pink-200"><Plus className="w-8 h-8" /></div>
            <span className="font-bold text-xl text-gray-700">Xây Tổ Chat Mới</span>
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-xl border-2 border-pink-200 rounded-[32px] p-8 shadow-xl shadow-pink-200/50 space-y-5 overflow-visible">
            <div className="flex justify-between items-center mb-2"><h3 className="text-xl font-bold text-gray-800 flex items-center gap-2"><ShieldCheck className="text-pink-500" /> Xây Tổ</h3><button type="button" onClick={() => setShowCreate(false)} className="text-gray-400 hover:text-pink-500 p-2 rounded-full hover:bg-pink-50"><X className="w-5 h-5" /></button></div>
            <div><label className="block text-sm font-bold text-gray-600 mb-2">Tên Tổ Chat</label><input type="text" value={roomName} onChange={e => setRoomName(e.target.value)} required placeholder="VD: Họp Tổ Dân Phố" className="w-full bg-white border-2 border-pink-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-pink-400 transition-colors" /></div>
            <div className="relative">
              <label className="block text-sm font-bold text-gray-600 mb-2">Thêm thành viên</label>
              <UserAutocomplete availableUsers={allUsers.filter(u => u !== profile.username)} selectedUsers={participants} onAdd={(u) => setParticipants([...participants, u])} onRemove={(u) => setParticipants(participants.filter(x => x !== u))} />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold py-4 px-4 rounded-xl mt-4 transition-all shadow-md border border-pink-400">Xây Tổ Thoai</button>
          </form>
        )}

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2 border-b-2 border-pink-200 pb-3"><MessageSquare className="w-5 h-5 text-pink-400" /> Các Tổ bạn đang tham gia</h2>
          {rooms.length === 0 ? (
            <div className="bg-white/50 backdrop-blur-sm rounded-[32px] border-2 border-pink-200 p-10 text-center"><p className="text-gray-500 font-medium">Bạn chưa tham gia Tổ chat nào.</p></div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {rooms.map(room => (
                <div key={room.id} onClick={() => onSelect(room)} className="relative bg-white/70 backdrop-blur-md border-2 border-pink-200 hover:border-pink-400 rounded-3xl p-5 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl shadow-sm group flex flex-col gap-3 overflow-hidden">
                  {room.bgUrl && <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none" style={{backgroundImage: `url(${room.bgUrl})`}}></div>}
                  <h3 className="relative z-10 font-black text-gray-800 text-lg truncate group-hover:text-pink-500 transition-colors">{room.name}</h3>
                  <div className="relative z-10 flex items-center justify-between mt-auto">
                    <p className="text-xs text-gray-500 font-medium flex items-center gap-1 truncate"><Users className="w-3.5 h-3.5 flex-shrink-0 text-pink-300" /> {room.allowedUsers.join(', ')}</p>
                    <div className="bg-pink-100 text-pink-600 border border-pink-300 text-[10px] px-3 py-1.5 rounded-full font-bold ml-2 shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors">Dô liền</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function MessageBubble({ msg, isMine }) {
  const timeStr = msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) : '';
  if (msg.isSystem) return <div className="flex justify-center my-4 relative z-10"><div className="bg-pink-50 text-pink-500 font-medium text-xs px-4 py-2 rounded-full border-2 border-pink-200 flex items-center gap-2 shadow-sm"><Info className="w-4 h-4 text-blue-400" /><span>{msg.text}</span><span className="opacity-50 ml-1">({timeStr})</span></div></div>;
  return (
    <div className={`flex flex-col ${isMine ? 'items-end' : 'items-start'} mb-4 relative z-10`}>
      <div className="flex items-end gap-2 max-w-[85%] sm:max-w-[70%]">
        {!isMine && <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-bold text-pink-500 mb-1 flex-shrink-0 shadow-sm border-2 border-pink-200">{msg.senderName.charAt(0).toUpperCase()}</div>}
        <div className={`flex flex-col ${isMine ? 'items-end' : 'items-start'}`}>
          {!isMine && <span className="text-[11px] font-bold text-gray-500 px-1 ml-1 mb-1">{msg.senderName}</span>}
          <div className={`p-3.5 rounded-2xl relative group shadow-sm ${isMine ? 'bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-br-sm border border-pink-500' : 'bg-white text-gray-800 rounded-bl-sm border border-pink-200'}`}>
            {msg.mediaUrl && (
              <div className="mb-2 rounded-xl overflow-hidden border border-black/5">
                {msg.mediaType === 'image' && <img src={msg.mediaUrl} alt="attachment" className="max-w-full max-h-64 object-cover" loading="lazy" />}
                {msg.mediaType === 'video' && <video src={msg.mediaUrl} controls className="max-w-full max-h-64 object-cover" />}
                {msg.mediaType === 'sticker' && <img src={msg.mediaUrl} alt="sticker" className="w-32 h-32 object-contain" loading="lazy" />}
              </div>
            )}
            {msg.text && <p className="whitespace-pre-wrap break-words leading-relaxed text-sm font-medium">{msg.text}</p>}
            <span className={`text-[10px] mt-1.5 block opacity-80 ${isMine ? 'text-pink-100 text-right' : 'text-gray-400'}`}>{timeStr}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthScreen({ db, onComplete }) {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [secret, setSecret] = useState('');
  
  const [isExisting, setIsExisting] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [existingData, setExistingData] = useState(null);
  const [savedPin, setSavedPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Thêm state khóa thiết bị cho AuthScreen
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutTime, setLockoutTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (lockoutTime > 0) {
      const interval = setInterval(() => {
        const remaining = Math.ceil((lockoutTime - Date.now()) / 1000);
        if (remaining <= 0) {
          setLockoutTime(0);
          setFailedAttempts(0);
          setError('');
          clearInterval(interval);
        } else {
          setTimeLeft(remaining);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [lockoutTime]);

  const checkUsername = async (e) => {
    e.preventDefault();
    if (lockoutTime > 0) return;
    setError('');
    const trimmed = username.trim();
    if (trimmed.length < 3) return setError('Tên đăng nhập phải có ít nhất 3 ký tự.');
    setLoading(true);
    try {
      const snap = await getDoc(getUserProfileDoc(trimmed));
      if (snap.exists()) {
        setIsExisting(true); setSavedPin(snap.data().pin); setExistingData(snap.data());
      } else {
        setIsExisting(false); setExistingData(null);
      }
      setIsResetting(false);
      setStep(2);
    } catch (err) { setError('Lỗi kết nối máy chủ.'); }
    setLoading(false);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (lockoutTime > 0) return;
    setError('');
    const trimmed = username.trim();
    
    if (isExisting && isResetting) {
      if (secret !== '190999201001') { setError('Mã bí mật (Secret Code) không chính xác!'); return; }
    }

    if (!/^\d{6}$/.test(pin)) return setError('Mã PIN phải bao gồm chính xác 6 chữ số.');

    setLoading(true);
    try {
      const hashedInputPin = await hashData(pin);
      const now = Date.now();

      if (isExisting) {
        if (isResetting) {
          if (pin !== confirmPin) { setError('Mã PIN xác nhận không khớp.'); setLoading(false); return; }
          await updateDoc(getUserProfileDoc(trimmed), { pin: hashedInputPin, lastLoginAt: now });
          await logActivity('RESET_PIN', trimmed);
          onComplete({ username: trimmed, pin: hashedInputPin, createdAt: existingData.createdAt, lastLoginAt: now });
        } else {
          // Xử lý báo lỗi và đếm sai
          if (hashedInputPin !== savedPin) { 
            setFailedAttempts(prev => {
              const newAttempts = prev + 1;
              if (newAttempts >= 5) {
                setError('Khóa tạm thời do nhập sai quá nhiều!');
                setLockoutTime(Date.now() + 60000); // Khóa 60s
                playAlarmSound();
                logActivity('BRUTE_FORCE_WARNING', trimmed, { attempts: newAttempts });
              } else {
                setError(`Mã PIN không đúng (Sai ${newAttempts}/5).`);
              }
              return newAttempts;
            });
            setPin('');
            setLoading(false); 
            return; 
          }
          
          // Đăng nhập thành công
          setFailedAttempts(0);
          await updateDoc(getUserProfileDoc(trimmed), { lastLoginAt: now });
          const dirRef = isCustomConfigValid ? collection(db, 'user_directory') : collection(db, 'artifacts', typeof __app_id !== 'undefined' ? __app_id : 'secure-chat', 'public', 'data', 'user_directory');
          await setDoc(doc(dirRef, encodeData(trimmed)), { joinedAt: existingData.joinedAt || now, lastLoginAt: now }, { merge: true });
          await logActivity('LOGIN', trimmed);
          onComplete({ username: trimmed, pin: hashedInputPin, createdAt: existingData.createdAt, lastLoginAt: now });
        }
      } else {
        if (pin !== confirmPin) { setError('Mã PIN xác nhận không khớp.'); setLoading(false); return; }
        const profileData = { username: trimmed, pin: hashedInputPin, createdAt: now, lastLoginAt: now };
        await setDoc(getUserProfileDoc(trimmed), { username: encodeData(trimmed), pin: hashedInputPin, createdAt: now, lastLoginAt: now });
        const dirRef = isCustomConfigValid ? collection(db, 'user_directory') : collection(db, 'artifacts', typeof __app_id !== 'undefined' ? __app_id : 'secure-chat', 'public', 'data', 'user_directory');
        await setDoc(doc(dirRef, encodeData(trimmed)), { joinedAt: now, lastLoginAt: now });
        await logActivity('SIGNUP', trimmed);
        onComplete(profileData);
      }
    } catch (err) { setError('Lỗi hệ thống khi đăng nhập.'); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 px-4 font-sans text-gray-800">
      <FloatingBackground />
      <div className="max-w-md w-full bg-white/80 backdrop-blur-xl border-2 border-pink-200 p-8 rounded-[40px] shadow-2xl shadow-pink-200/50 relative overflow-hidden z-10">
        
        {lockoutTime > 0 ? (
          <div className="text-center mb-6 mt-4 w-full">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 shadow-inner bg-red-100 border-red-300">
              <Lock className="w-10 h-10 text-red-500 animate-bounce" />
            </div>
            <h2 className="text-2xl font-black mb-2 text-red-500">CẢNH BÁO!</h2>
            <p className="text-red-500 font-bold mb-2">Nhập sai quá nhiều lần!</p>
            <div className="text-5xl font-black text-red-400 my-6">{timeLeft}s</div>
            <p className="text-sm text-gray-500">Vui lòng đợi để thử lại.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <div className="bg-pink-400 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-pink-200 rotate-3 border-2 border-pink-200">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-800">Tham Gia Tổ Chat</h2>
              <p className="text-gray-500 font-medium text-sm mt-2">
                {step === 1 ? 'Nhập tên để đăng nhập hoặc tạo mới nha.' : (
                  isExisting ? (isResetting ? `Khôi phục PIN cho: ${username}` : `Đăng nhập: ${username}`) : `Tạo mã PIN cho: ${username}`
                )}
              </p>
            </div>

            {error && <div className="bg-red-50 text-red-500 font-bold p-3 rounded-xl mb-5 text-sm border-2 border-red-200 text-center">{error}</div>}

            {step === 1 ? (
              <form onSubmit={checkUsername} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Tên Đăng Nhập / Hiển Thị</label>
                  <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full bg-white border-2 border-pink-200 rounded-2xl px-5 py-4 text-gray-800 focus:outline-none focus:border-pink-400 transition-colors" placeholder="VD: dandan, meomeo" disabled={loading} autoFocus />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-4 px-4 rounded-2xl mt-4 transition-all shadow-lg border border-pink-400 flex justify-center items-center gap-2">{loading ? <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span> : 'Tiếp Tục'}</button>
              </form>
            ) : (
              <form onSubmit={handleAuth} className="space-y-4">
                
                {isExisting && isResetting && (
                  <div className="mb-4 bg-pink-50/50 p-4 rounded-2xl border-2 border-pink-200">
                    <label className="block text-sm font-bold text-blue-500 mb-2">Mã bí mật (Secret Code)</label>
                    <input type="password" value={secret} onChange={e => setSecret(e.target.value)} className="w-full bg-white border-2 border-pink-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-400" placeholder="Nhập mã bí mật để cấp lại PIN" disabled={loading} autoFocus />
                  </div>
                )}

                <div className={`grid ${(isExisting && !isResetting) ? 'grid-cols-1' : 'grid-cols-2 gap-4'}`}>
                  <div>
                    <label className="block text-sm font-bold text-gray-600 mb-2">{isResetting ? 'PIN Mới (6 số)' : 'Mã PIN (6 số)'}</label>
                    <input type="password" maxLength="6" inputMode="numeric" value={pin} onChange={e => setPin(e.target.value.replace(/\D/g, ''))} className="w-full bg-white border-2 border-pink-200 rounded-2xl px-4 py-4 text-gray-800 tracking-widest text-center text-xl focus:outline-none focus:border-pink-400 transition-colors" placeholder="••••••" disabled={loading} autoFocus={!isResetting} />
                  </div>
                  {(!isExisting || isResetting) && (
                    <div>
                      <label className="block text-sm font-bold text-gray-600 mb-2">Xác Nhận PIN</label>
                      <input type="password" maxLength="6" inputMode="numeric" value={confirmPin} onChange={e => setConfirmPin(e.target.value.replace(/\D/g, ''))} className="w-full bg-white border-2 border-pink-200 rounded-2xl px-4 py-4 text-gray-800 tracking-widest text-center text-xl focus:outline-none focus:border-pink-400 transition-colors" placeholder="••••••" disabled={loading} />
                    </div>
                  )}
                </div>

                {isExisting && !isResetting && (
                  <div className="text-right mt-1">
                    <button type="button" onClick={() => setIsResetting(true)} className="text-sm font-bold text-blue-500 hover:text-blue-600 underline transition-colors">Quên mã PIN?</button>
                  </div>
                )}

                <div className="flex gap-3 mt-6 pt-4 border-t-2 border-pink-100">
                  <button type="button" onClick={() => { setStep(1); setPin(''); setConfirmPin(''); setSecret(''); setIsResetting(false); setError(''); }} disabled={loading} className="px-5 py-4 bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 rounded-2xl text-gray-500 font-bold transition-colors">←</button>
                  <button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-4 px-4 rounded-2xl shadow-lg border border-pink-400 flex justify-center items-center gap-2 transition-all">
                    {loading ? <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span> : (isExisting ? (isResetting ? 'Khôi phục PIN' : 'Mở Khóa') : 'Tạo & Đăng Nhập')}
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function LockScreen({ profile, onUnlock, onReset }) {
  const [inputPin, setInputPin] = useState('');
  const [error, setError] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutTime, setLockoutTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleNumpadClick = (num) => {
    if (lockoutTime > 0) return;
    setInputPin(prev => prev.length < 6 ? (setError(''), prev + num) : prev);
  };
  
  const handleBackspace = () => {
    if (lockoutTime > 0) return;
    setInputPin(prev => prev.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lockoutTime > 0) return;
      if (/^[0-9]$/.test(e.key)) handleNumpadClick(e.key);
      else if (e.key === 'Backspace') handleBackspace();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lockoutTime]);

  useEffect(() => {
    let isCancelled = false;
    const verifyPin = async () => {
      if (inputPin.length === 6) {
        const hashed = await hashData(inputPin);
        if (isCancelled) return;

        if (hashed === profile.pin) {
          setFailedAttempts(0);
          onUnlock();
        } else {
          setFailedAttempts(prev => {
            const newAttempts = prev + 1;
            if (newAttempts === 5) {
              setError('Khóa tạm thời do nhập sai quá nhiều!');
              setLockoutTime(Date.now() + 60000); // Khóa 60 giây
              playAlarmSound();
              logActivity('BRUTE_FORCE_WARNING', profile.username, { attempts: newAttempts });
            } else if (newAttempts < 5) {
              setError(`Mã PIN không đúng (Sai ${newAttempts}/5)`);
            }
            return newAttempts;
          });
          
          setTimeout(() => { if (!isCancelled) setInputPin(''); }, 500);
        }
      }
    };
    verifyPin();
    return () => { isCancelled = true; };
  }, [inputPin, profile.pin, profile.username, onUnlock]);

  useEffect(() => {
    if (lockoutTime > 0) {
      const interval = setInterval(() => {
        const remaining = Math.ceil((lockoutTime - Date.now()) / 1000);
        if (remaining <= 0) {
          setLockoutTime(0);
          setFailedAttempts(0);
          setError('');
          clearInterval(interval);
        } else {
          setTimeLeft(remaining);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [lockoutTime]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 px-4 font-sans text-gray-800">
      <FloatingBackground />
      <div className="max-w-sm w-full bg-white/80 backdrop-blur-xl border-2 border-pink-200 p-10 rounded-[48px] shadow-2xl shadow-pink-200/50 flex flex-col items-center z-10 relative">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 border-4 shadow-inner transition-colors ${lockoutTime > 0 ? 'bg-red-100 border-red-300' : 'bg-pink-100 border-pink-200'}`}>
          <Lock className={`w-10 h-10 ${lockoutTime > 0 ? 'text-red-500 animate-bounce' : 'text-pink-500'}`} />
        </div>
        <h2 className={`text-2xl font-black mb-1 ${lockoutTime > 0 ? 'text-red-500' : 'text-gray-800'}`}>
          {lockoutTime > 0 ? 'CẢNH BÁO!' : 'Đã Khóa Tổ'}
        </h2>
        
        {lockoutTime > 0 ? (
          <div className="text-center mb-6 mt-2 w-full">
            <p className="text-red-500 font-bold mb-2">Nhập sai quá nhiều lần!</p>
            <div className="text-5xl font-black text-red-400 my-6">{timeLeft}s</div>
            <p className="text-sm text-gray-500">Vui lòng đợi để thử lại.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-8 text-center font-medium">Xin chào <span className="text-pink-500 font-bold">{profile.username}</span>. Nhập PIN để mở khóa.</p>
            
            <div className="flex justify-center gap-3 mb-8 h-4">
              {[...Array(6)].map((_, i) => (<div key={i} className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border border-pink-300 ${i < inputPin.length ? 'bg-pink-500 shadow-md scale-110' : 'bg-pink-100'}`} />))}
            </div>
            
            {error && <p className="text-red-500 font-bold text-sm mb-4 h-5 animate-pulse">{error}</p>}
            {!error && <p className="h-5 mb-4"></p>}
            
            <div className="grid grid-cols-3 gap-4 w-full max-w-[260px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (<button key={num} onClick={() => handleNumpadClick(num.toString())} className="h-16 rounded-2xl bg-white hover:bg-pink-100 border-2 border-pink-100 hover:border-pink-300 text-2xl font-bold text-pink-500 shadow-sm transition-colors active:scale-95">{num}</button>))}
              <div className="col-start-2"><button onClick={() => handleNumpadClick('0')} className="w-full h-16 rounded-2xl bg-white hover:bg-pink-100 border-2 border-pink-100 hover:border-pink-300 text-2xl font-bold text-pink-500 shadow-sm transition-colors active:scale-95">0</button></div>
              <button onClick={handleBackspace} className="h-16 rounded-2xl bg-gray-50 hover:bg-pink-100 border-2 border-pink-100 hover:border-pink-300 text-gray-400 flex items-center justify-center transition-colors active:scale-95"><X className="w-6 h-6" /></button>
            </div>
          </>
        )}
        
        {/* Ẩn nút đăng nhập lại khi đang bị khóa */}
        {lockoutTime === 0 && (
          <button onClick={onReset} className="mt-10 text-sm font-bold text-blue-500 hover:text-blue-600 underline transition-colors">
            Đăng nhập lại / Quên mã PIN?
          </button>
        )}
      </div>
    </div>
  );
}

function UserAutocomplete({ availableUsers, selectedUsers, onAdd, onRemove }) {
  const [input, setInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = availableUsers.filter(u => 
    !selectedUsers.includes(u) && u.toLowerCase().includes(input.toLowerCase())
  );

  const handleAddCustom = () => {
    const val = input.trim();
    if (val && !selectedUsers.includes(val)) {
      onAdd(val);
      setInput('');
      setShowDropdown(false);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap gap-2 mb-3">
        {selectedUsers.map(u => (
          <span key={u} className="bg-blue-100 border border-blue-200 text-blue-600 px-3 py-1.5 rounded-xl text-sm font-bold flex items-center gap-1 shadow-sm">
            {u} <button type="button" onClick={() => onRemove(u)} className="hover:text-red-400 text-blue-400"><XCircle className="w-4 h-4" /></button>
          </span>
        ))}
      </div>
      <div className="relative">
        <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          value={input} 
          onChange={e => { setInput(e.target.value); setShowDropdown(true); }}
          onFocus={() => setShowDropdown(true)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddCustom();
            }
          }}
          className="w-full bg-white border-2 border-pink-200 rounded-xl pl-12 pr-4 py-3.5 text-gray-800 focus:outline-none focus:border-pink-400 transition-colors"
          placeholder="Nhập tên để tìm kiếm hoặc nhấn Enter để thêm..."
        />
        {showDropdown && input.trim() !== '' && (
          <div className="absolute z-50 mt-2 w-full bg-white border-2 border-pink-200 rounded-2xl shadow-xl max-h-48 overflow-y-auto overflow-hidden">
            {filtered.length > 0 && filtered.map(u => (
              <div 
                key={u} 
                onClick={() => { onAdd(u); setInput(''); setShowDropdown(false); }}
                className="px-5 py-3 hover:bg-pink-50 border-b border-pink-50 cursor-pointer flex items-center justify-between transition-colors text-gray-700 font-bold"
              >
                {u} <UserPlus className="w-4 h-4 text-pink-400" />
              </div>
            ))}
            {!filtered.some(u => u.toLowerCase() === input.trim().toLowerCase()) && (
              <div 
                onClick={handleAddCustom}
                className="px-5 py-4 hover:bg-pink-50 cursor-pointer flex items-center justify-between transition-colors text-blue-500 font-bold border-t border-pink-200 bg-gray-50/50"
              >
                Thêm tài khoản "{input.trim()}" <Plus className="w-4 h-4" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function RoomMembersModal({ room, allUsers, onClose, onAddMember }) {
  const [selected, setSelected] = useState([]);
  
  const handleAdd = () => {
    selected.forEach(u => onAddMember(u));
    setSelected([]);
  };

  return (
    <div className="fixed inset-0 bg-white/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white border-2 border-pink-200 rounded-[32px] shadow-2xl shadow-pink-200/50 overflow-visible">
        <div className="flex justify-between items-center p-6 border-b-2 border-pink-200 bg-pink-50/30 rounded-t-[32px]">
          <h3 className="text-gray-800 font-black flex items-center gap-2 text-xl"><Users className="w-6 h-6 text-pink-400" /> Quản lý thành viên</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-pink-500 bg-white border border-pink-200 rounded-full p-2 shadow-sm transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-pink-50/50 p-4 rounded-2xl border-2 border-pink-100">
            <h4 className="text-gray-700 text-sm font-bold flex items-center gap-2 mb-1"><Clock className="w-4 h-4 text-pink-400" /> Log Tổ Chat</h4>
            <p className="text-xs text-gray-500 font-medium ml-6">Tạo lúc: {room.createdAt ? new Date(room.createdAt).toLocaleString('vi-VN') : 'Chưa rõ'}</p>
          </div>
          <div>
            <h4 className="text-gray-600 text-sm font-bold mb-3 flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Đã tham gia ({room.allowedUsers.length})</h4>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-1">
              {room.allowedUsers.map(u => (
                <span key={u} className="bg-white border-2 border-pink-200 text-gray-700 font-bold px-3 py-1.5 rounded-full text-sm shadow-sm">
                  {u} {u === room.createdBy && <span className="text-pink-500 text-xs ml-1">(Trưởng phòng)</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t-2 border-pink-100 pt-5 relative">
            <h4 className="text-gray-600 text-sm font-bold mb-3 flex items-center gap-2"><UserPlus className="w-4 h-4 text-blue-500" /> Thêm thành viên mới</h4>
            <UserAutocomplete 
              availableUsers={allUsers.filter(u => !room.allowedUsers.includes(u))} 
              selectedUsers={selected} 
              onAdd={(u) => setSelected([...selected, u])} 
              onRemove={(u) => setSelected(selected.filter(x => x !== u))} 
            />
            {selected.length > 0 && (
              <button onClick={handleAdd} className="w-full mt-4 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-xl shadow-md border border-blue-400 transition-all">
                Xác nhận thêm ({selected.length})
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}