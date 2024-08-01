import {useState, useRef} from "react";
import axios from "axios";
import { SlArrowRightCircle } from "react-icons/sl";


function CConverter(){
    const rAmt = useRef();
    const[amt,setAmt] = useState("");
    const[msg, setMsg] = useState("");

    const hAmt = (event)=>{
        setAmt(event.target.value);
    }

    const CC = (event) => {
        event.preventDefault();
        if(amt == ""){
            alert("You did not enter any amount");
            rAmt.current.focus();
            return;
        }

        let a = parseFloat(amt);
        let url = "https://api.exchangerate-api.com/v4/latest/GBP";
        axios.get(url)
        .then(res => {
            let pounds = res.data.rates.INR;
            let amount = pounds*a;
            let ans = "\u20b9" +amount.toFixed(2);
            setMsg(ans);
        })
        .catch(err =>alert("issue"+err));

    }
    return(
        <>
        <center>
            <h1>CURRENCY CONVERTER APP</h1>
            <div className="img">
            <div className="flag-container">
            <img src = "./images/united-kingdom-flag-icon.webp"></img>
            <p>GBP</p>
            </div>
            <SlArrowRightCircle className="arrow-icon" />
            <div className="flag-container">
            <img src = "./images/india-flag-icon.webp"></img>
            <p>INR</p>
            </div>
            </div>
            <form onSubmit={CC}>
                <input type = "number" placeholder= "Enter amount in £" onChange={hAmt} ref={rAmt}></input>
                <br/><br/>
                <input type = "submit" value ="Convert" id="btn"></input>
                <h2 id="msg">{"Converted Amount :"+msg}</h2>

            </form>

        </center>
        <footer>
               <p>&copy; Varnika Bhoga</p>
            </footer>  
            
        
        </>
    )


}export default CConverter;