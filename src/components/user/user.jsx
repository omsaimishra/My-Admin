import "./user.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { initialRows } from "../tabledatahome";

const User = () => {
  const { id } = useParams();
  const userData = initialRows.find((n) => n.id === parseInt(id));
  const [user, setUser] = useState(userData);
  const [editMode, setEditMode] = useState(false);

  if (!user) return <p>User not found</p>;

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    console.log("Saved user:", user);
    setEditMode(false);
  };

  return (
    <div className="user-container">
      <h2 className="user-title">{editMode ? "Edit" : "User"} Profile</h2>
      <div className="user-wrapper">
        {/* Left Side - Info Card */}
        <div className="user-show">
          <img src={user.avatar} alt="avatar" className="user-avatar" />
          <div className="user-info">
            <h3>{user.fullName}</h3>
            <span className="user-role">Software Engineer</span>
          </div>
          <div className="user-section">
            <h4>Account Details</h4>
            <p>👤 {user.username}</p>
            <p>🎂 10.12.1999</p>
          </div>
          <div className="user-section">
            <h4>Contact Details</h4>
            <p>📞 {user.phone}</p>
            <p>📧 {user.email}</p>
            <p>📍 {user.address}</p>
          </div>
        </div>

        {/* Right Side - Edit or View Mode */}
        <div className="user-edit">
          {editMode ? (
            <form>
              <div className="user-form-group">
                <label>Username</label>
                <input name="username" value={user.username} onChange={handleChange} />
              </div>
              <div className="user-form-group">
                <label>Full Name</label>
                <input name="fullName" value={user.fullName} onChange={handleChange} />
              </div>
              <div className="user-form-group">
                <label>Email</label>
                <input name="email" value={user.email} onChange={handleChange} />
              </div>
              <div className="user-form-group">
                <label>Phone</label>
                <input name="phone" value={user.phone} onChange={handleChange} />
              </div>
              <div className="user-form-group">
                <label>Address</label>
                <input name="address" value={user.address} onChange={handleChange} />
              </div>
              <button type="button" className="update-button" onClick={handleSave}>
                Update
              </button>
            </form>
          ) : (
            <div>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Full Name:</strong> {user.fullName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Address:</strong> {user.address}</p>
            </div>
          )}

          <button
            className="update-button"
            style={{ marginTop: "20px", backgroundColor: editMode ? "#999" : "#2a52be" }}
            onClick={() => setEditMode((prev) => !prev)}
          >
            {editMode ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
