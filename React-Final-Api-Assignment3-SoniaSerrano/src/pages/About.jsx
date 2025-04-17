// pages/About.jsx
import profileImage from '../assets/profile.jpg';

export default function About() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <img src={profileImage} alt="Profile" className="w-48 h-48 rounded-full mb-4" />
      <p> My name is Sonia and I am a web development student that is currently learning many programing languages.
        I am currently have knowing in HTML, CSS, Javascript, C#, Ajax, json and learning PHP, MongoDB, React.
      </p>
    </div>
  );
}