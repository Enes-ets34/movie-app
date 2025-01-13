export interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | null;
  hideToast: () => void;
}
