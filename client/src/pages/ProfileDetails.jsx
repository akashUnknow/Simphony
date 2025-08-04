import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("profileData")) || [];
    const found = stored.find((item) => item.id === id);
    setProfile(found);

  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
      <ul className="space-y-2">
        {Object.entries(profile).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDetails;
