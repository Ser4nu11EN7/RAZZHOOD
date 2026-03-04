import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('ethelynburt@gmail.com');
  const navigate = useNavigate();

  const handleContinue = () => {
    setStep(2);
    setTimeout(() => {
      setStep(3);
    }, 1500);
  };

  const handleSimulateClick = () => {
    setStep(4);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-surface-dark w-full max-w-md rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 sm:p-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">欢迎</h1>
                <p className="text-gray-500">登录或创建账户</p>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">邮箱地址</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#eff4ff] dark:bg-blue-900/20 border border-gray-200 dark:border-gray-700 rounded-md px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button 
                onClick={handleContinue}
                className="w-full bg-black text-white font-medium py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                通过邮箱继续
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">欢迎</h1>
                <p className="text-gray-500">登录或创建账户</p>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">邮箱地址</label>
                <input 
                  type="email" 
                  value={email}
                  readOnly
                  className="w-full bg-[#eff4ff] dark:bg-blue-900/20 border border-gray-200 dark:border-gray-700 rounded-md px-4 py-3 text-gray-900 dark:text-white focus:outline-none"
                />
              </div>
              <button 
                disabled
                className="w-full bg-gray-500 text-white font-medium py-3 rounded-md cursor-not-allowed"
              >
                发送中...
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-4">
              <div className="w-16 h-12 mx-auto mb-6 relative flex items-center justify-center">
                <Mail className="w-16 h-16 text-black dark:text-white" strokeWidth={1} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">检查你的邮箱</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                我们已发送登录链接至 <span className="font-medium text-gray-900 dark:text-white">{email}</span>
              </p>
              <p className="text-sm text-gray-500 mb-8">链接将在15分钟后过期。</p>
              <button onClick={() => setStep(1)} className="text-blue-600 hover:underline text-sm font-medium">
                使用其他邮箱
              </button>
              
              {/* Hidden button to simulate clicking the email link */}
              <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800">
                <button onClick={handleSimulateClick} className="text-xs text-gray-400 hover:text-gray-600">
                  (模拟点击邮件链接)
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} className="text-center py-12">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                className="w-20 h-20 bg-green-50 dark:bg-green-900/20 mx-auto mb-8 flex items-center justify-center rounded-full border-2 border-green-100 dark:border-green-800/50 shadow-sm"
              >
                <Check className="w-10 h-10 text-accent-green dark:text-green-400" strokeWidth={2.5} />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="text-3xl font-sans font-bold text-primary dark:text-white mb-3 tracking-tight"
              >
                登录成功
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3 }}
                className="text-base text-text-muted-light dark:text-text-muted-dark font-medium"
              >
                正在为您跳转至仪表盘...
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5 }}
                className="mt-10 flex justify-center"
              >
                <div className="flex space-x-2">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full" />
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full" />
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
