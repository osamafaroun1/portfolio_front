import './Login.css';
import Header from '../../Components/Header/Header';
const LogIn: React.FC = () => {
  const API_URL = 'http://127.0.0.1:8000/api/register';
        

    const [email, setemail]:any = useState('');
    const [password , setpassword]:any = useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.post(API_URL, {
            email,
            password
          });

          if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log('ok')
          }
          else {
              console.log('فشل تسجيل الدخول')
          }
      
        } catch (error:any) {
      console.error('Login error', error.response);
       }
     }
    return (
        <>
        <Header/>
        <div className="login"> 
        <form>
            <img src="./logo.png" alt="" />
            <input
              type="text" 
              className='logInput'
              placeholder="email" 
              onChange={(event)=>setemail(event.target.value)} />
            <input type="password" 
             className='logInput'
             placeholder="password" 
             onChange={(event)=>setpassword(event.target.value)} />
            <input  type='submit' value="login" onClick={handleLogin} />
        </form>
        </div>
        </>
    );
}
export default LogIn;