import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
  });

  const [bookings, setBookings] = useState([
    {
      id: 1,
      service: "Screen Repair",
      date: "2023-06-15",
      status: "Completed",
    },
    {
      id: 2,
      service: "Battery Replacement",
      date: "2023-06-20",
      status: "Scheduled",
    },
  ]);

  const handleEditProfile = () => {
    console.log("Edit Profile clicked");
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Your Profile</h1>
      <div className="max-w-2xl mx-auto">
        {/* Personal Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <button
            onClick={handleEditProfile}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>

        {/* Bookings Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
          <div className="grid grid-cols-1 gap-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-4 border rounded-md shadow"
              >
                <p>
                  <strong>Service:</strong> {booking.service}
                </p>
                <p>
                  <strong>Date:</strong> {booking.date}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${
                      booking.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    } font-bold`}
                  >
                    {booking.status}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
