import "./newuser.css"
const Newuser=()=>{
    return(
        <div className="newuser">
            <h1 className="newusertitle">New user</h1>
            <form  className="newuserform">
                <div className="newuseritem">
                    <label >Username</label>
                    <input type="text" placeholder="John" />
                </div>
                 <div className="newuseritem">
                    <label >Fullname</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                 <div className="newuseritem">
                    <label >Email</label>
                    <input type="text" placeholder="Johnsmith@gmail.com" />
                </div>
                 <div className="newuseritem">
                    <label >Password</label>
                    <input type="text" placeholder="John12345" />
                </div>
                 <div className="newuseritem">
                    <label >Phone</label>
                    <input type="text" placeholder="+917847089849" />
                </div>
                 <div className="newuseritem">
                    <label >Adress</label>
                    <input type="text" placeholder="India | Odisha" />
                </div>
                 <div className="newuseritem">
                     <label >Gender</label>
                    <div className="newusergender">
                   
                    <input type="radio" name="gender" id="male" value="male"/>
                     <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"/>
                     <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other"/>
                     <label for="other" >Other</label>
                </div>
                <div className="newuseritem">
                    <label>Active</label>
                    <select className="newuserselect" id="active" name="active">
                      <option value="yes">yes</option>
                      <option value="no">No</option>
 
                    </select>
                </div>
                           <button className="newuserbutton">Create</button>
                </div>

            </form>
        </div>
    );
}
export default Newuser;