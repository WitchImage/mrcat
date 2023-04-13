import { toast } from 'react-toastify';

export default function addNotification(message: string) {
    toast(message, { type: 'default' });
}
