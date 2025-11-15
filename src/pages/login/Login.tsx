import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login:React.FC = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const hSubmit = async(e: React.FormEvent)=>{
        e.preventDefault();
    }
}
export default Login;