import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  useAuthMeQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from "@/redux/features/auth/authApi";
import { toast } from "sonner";


const ProfileUpdate = () => {
  const { isLoading, data: user } = useAuthMeQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();
  const [updatePassword] = useUpdatePasswordMutation();
  
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    profileImage: "",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setProfile({
        name: user?.data?.name || "",
        email: user?.data?.email || "",
        phone: user?.data?.phone || "",
        profileImage: user?.data?.profileImage || "",
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async () => {
    if (
      !profile.name.trim() ||
      !profile.phone.trim() ||
      !profile.profileImage.trim()
    ) {
      return toast.error("Fields cannot be empty!");
    }
    const toastId = toast.loading("Updating profile...");
    const res = await updateProfile(profile);
    if (res?.data?.success) {
      toast.success("Profile updated successfully", { id: toastId });
      setIsEditingProfile(false);
    } else {
      toast.error("Failed to update profile", { id: toastId });
    }
  };

  const handleCancelProfileEdit = () => {
    setProfile({
      name: user?.data?.name || "",
      email: user?.data?.email || "",
      phone: user?.data?.phone || "",
      profileImage: user?.data?.profileImage || "",
    });
    setIsEditingProfile(false);
  };

  const handleSavePassword = async () => {
    if (!passwords.oldPassword.trim() || !passwords.newPassword.trim()) {
      return toast.error("Password fields cannot be empty!");
    }
    const toastId = toast.loading("Updating password...");
    const res = await updatePassword(passwords);
    if (res?.data?.success) {
      toast.success("Password updated successfully", { id: toastId });
      setIsEditingProfile(false);
    }else if(res?.error){
      toast.error( "Old Password is not correct!!", { id: toastId });
    } else {
      console.log(res,"res")
      toast.error( "Failed to update password", { id: toastId });
    }
  };

  const handleCancelPasswordEdit = () => {
    setPasswords({ oldPassword: "", newPassword: "" });
    setIsEditingPassword(false);
  };
  console.log(user,"user data")
  if (isLoading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      {/* Profile Section */}
      <Card>
        <CardHeader className="flex items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src={profile.profileImage || "https://via.placeholder.com/150"}
            />
            <AvatarFallback>{profile.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Profile Information</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Label>Name</Label>
          <Input
            name="name"
            required
            value={profile.name}
            onChange={handleInputChange}
            disabled={!isEditingProfile}
          />

          <Label className="mt-2">Email</Label>
          <Input name="email"  value={profile.email} disabled={true} />

          <Label className="mt-2">Phone</Label>
          <Input
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            disabled={!isEditingProfile}
          />

          <Label className="mt-2">Profile Image URL</Label>
          <Input
            name="profileImage"
            value={profile.profileImage}
            onChange={handleInputChange}
            disabled={!isEditingProfile}
          />

          {isEditingProfile ? (
            <div className="flex gap-4 mt-4">
              <Button variant="outline" onClick={handleUpdateProfile}>
                Save Changes
              </Button>
              <Button variant="destructive" onClick={handleCancelProfileEdit}>
                Cancel
              </Button>
            </div>
          ) : (
            <Button
              className="mt-4"
              variant="outline"
              onClick={() => setIsEditingProfile(true)}
            >
              Edit Profile
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Password Change Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Old Password</Label>
          <Input
            type="password"
            name="oldPassword"
            value={passwords.oldPassword}
            onChange={handlePasswordChange}
            disabled={!isEditingPassword}
          />

          <Label className="mt-2">New Password</Label>
          <Input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handlePasswordChange}
            disabled={!isEditingPassword}
          />

          {isEditingPassword ? (
            <div className="flex gap-4 mt-4">
              <Button variant="outline" onClick={handleSavePassword}>
                Save Password
              </Button>
              <Button variant="destructive" onClick={handleCancelPasswordEdit}>
                Cancel
              </Button>
            </div>
          ) : (
            <Button
              className="mt-4"
              variant="outline"
              onClick={() => setIsEditingPassword(true)}
            >
              Edit Password
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileUpdate;
