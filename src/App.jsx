import { CryptoContextProvider } from './context/crypto-context';
import AppLayout from './Components/Layout/AppLayout';


export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  )
}