import { create } from 'zustand';

type ToastState = {
  message: string;
  type: 'success' | 'error' | 'warning' | null;
  showToast: (message: string, type: 'success' | 'error' | 'warning') => void;
  hideToast: () => void;
};

export const useToastStore = create<ToastState>(set => ({
  message: '',
  type: null,
  showToast: (message, type) => {
    set({ message, type });
  },
  hideToast: () => set({ message: '', type: null }),
}));
