"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";
import MiniModal from "@/components/reusableComponents/modal";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import {
  BsChevronRight,
  BsBoxArrowRight,
  BsQrCode,
  BsCreditCard,
  BsHouseDoor,
  BsGlobe,
  BsBell,
} from "react-icons/bs";

export default function LoginTab() {
  const { user, login, signup, logout, updateUserName } = useAuth();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const resetFields = () => {
    setLoginEmail("");
    setSignupName("");
    setSignupEmail("");
    setAcceptPrivacy(false);
  };

  const changeMode = (newMode: "login" | "signup") => {
    setMode(newMode);
    resetFields();
  };

  const isLoginValid = loginEmail.includes("@") && loginEmail.endsWith(".com");

  const isSignupValid =
    signupName.trim().length > 0 &&
    signupEmail.includes("@") &&
    signupEmail.endsWith(".com") &&
    acceptPrivacy;

  const isFormValid = mode === "login" ? isLoginValid : isSignupValid;

  const handleContinue = () => {
    if (mode === "login") {
      if (!loginEmail.trim()) {
        toast("Please enter your email");
        return;
      }

      login(loginEmail);
      return;
    }

    if (!signupName.trim()) {
      toast("Please enter your name");
      return;
    }

    if (!signupEmail.trim()) {
      toast("Please enter your email");
      return;
    }

    if (!acceptPrivacy) {
      toast("Please accept the Privacy Policy");
      return;
    }

    signup(signupName, signupEmail);
  };

  const demoToast = () => {
    toast("It's only a frontend demo for the moment.");
  };

  if (user) {
    const initials = user.name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const openEditModal = () => {
      setEditedName(user?.name ?? "");
      setIsEditModalOpen(true);
    };

    const saveEditedName = () => {
      if (!editedName.trim()) {
        toast("Please enter a valid name");
        return;
      }

      updateUserName(editedName);
      setIsEditModalOpen(false);
    };

    return (
      <div className="min-h-screen bg-[#f4f6ff] pb-24">
        {isEditModalOpen && (
          <MiniModal
            title="Edit name"
            cancelText="Cancel"
            acceptText="Save"
            onCancel={() => setIsEditModalOpen(false)}
            onAccept={saveEditedName}
          >
            <input
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              placeholder="Enter your name"
              className="h-12 w-full rounded-lg border border-gray-300 px-3 text-black outline-none"
            />
          </MiniModal>
        )}
        
        {/* Header */}
        <div className="flex items-center gap-4 bg-white px-5 py-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f4f4f8] text-2xl font-bold text-[#404553]">
            {initials}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#404553]">
              Hala {user.name}
            </h1>
            <p className="text-sm text-[#404553]">{user.email}</p>
          </div>

          <button
            onClick={openEditModal}
            className="rounded-full bg-[#f4f4f8] px-5 py-2 text-lg text-[#404553]"
          >
            Edit
          </button>
        </div>

        {/* My account */}
        <div className="px-3 pt-4">
          <h2 className="mb-2 font-bold text-[#404553]">My account</h2>

          <div className="overflow-hidden rounded-xl bg-white">
            <AccountRow icon={<BsHouseDoor />} label="Addresses" />
            <AccountRow icon={<BsQrCode />} label="QR Code" />
            <AccountRow icon={<BsCreditCard />} label="Saved Cards" />
          </div>
        </div>

        {/* Settings */}
        <div className="px-3 pt-5">
          <h2 className="mb-2 font-bold text-[#404553]">Settings</h2>

          <div className="overflow-hidden rounded-xl bg-white">
            <AccountRow icon={<BsGlobe />} label="Country" rightText="🇦🇪" />
            <AccountRow
              icon={<BsGlobe />}
              label="Language"
              rightText="English"
            />
            <AccountRow icon={<BsBell />} label="Notifications" />
          </div>
        </div>

        {/* Sign out */}
        <div className="px-3 pt-5">
          <button
            onClick={logout}
            className="flex w-full items-center justify-center gap-4 rounded-xl bg-white py-5 text-xl text-[#404553]"
          >
            <BsBoxArrowRight />
            Sign Out
          </button>
        </div>

        {/* Footer */}
        <div className="mx-3 mt-8 rounded-xl bg-white py-6 text-center">
          <button onClick={demoToast} className="font-bold text-blue-600">
            Sell with us
          </button>

          <div className="mt-6 flex justify-center gap-10 text-xl font-bold text-[#7e859b]">
            <div className="mt-6 flex justify-center gap-10 text-2xl text-[#7e859b]">
              <a
                href="https://www.linkedin.com/in/sebastiangomezsalinas/?locale=en"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/sebastiangs2309/"
                target="_blank"
              >
                <FaInstagram />
              </a>

              <a href="https://github.com/sebastiangs23" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm text-[#9aa0b5]">
            © 2026 Sebastian Gómez. All rights reserved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Moving image */}
      <div className="relative h-[270px] overflow-hidden bg-white">
        <img
          src="/images/background.png"
          alt="login background"
          className="login-tape-image h-full w-auto max-w-none object-contain"
        />
      </div>

      <div className="px-6">
        <h1 className="mb-5 text-center text-2xl font-bold text-[#404553]">
          Hala! Lets get started
        </h1>

        {/* Tabs */}
        <div className="mb-5 flex rounded-md bg-[#404553] p-1">
          <button
            type="button"
            onClick={() => changeMode("login")}
            className={`h-10 flex-1 rounded text-sm font-bold ${
              mode === "login"
                ? "bg-white text-[#404553]"
                : "bg-[#404553] text-white"
            }`}
          >
            Log in
          </button>

          <button
            type="button"
            onClick={() => changeMode("signup")}
            className={`h-10 flex-1 rounded text-sm font-bold ${
              mode === "signup"
                ? "bg-white text-[#404553]"
                : "bg-[#404553] text-white"
            }`}
          >
            Sign up
          </button>
        </div>

        {mode === "login" && (
          <input
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="Please enter email or mobile number"
            className="mb-4 h-14 w-full rounded-lg border border-gray-400 px-4 text-sm text-black outline-none placeholder:text-gray-400"
          />
        )}

        {mode === "signup" && (
          <div className="flex flex-col gap-4">
            <input
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              placeholder="Please enter your name"
              className="h-14 w-full rounded-lg border border-gray-400 px-4 text-sm text-black outline-none placeholder:text-gray-400"
            />

            <input
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              placeholder="Please enter email address"
              className="h-14 w-full rounded-lg border border-gray-400 px-4 text-sm text-black outline-none placeholder:text-gray-400"
            />

            <label className="flex items-start gap-3 text-sm text-[#404553]">
              <input
                type="checkbox"
                checked={acceptPrivacy}
                onChange={(e) => setAcceptPrivacy(e.target.checked)}
                className="mt-1 h-5 w-5"
              />
              <span>
                I confirm that I have read and accept the{" "}
                <span className="font-bold text-blue-600">Privacy Policy</span>
              </span>
            </label>
          </div>
        )}

        <button
          type="button"
          onClick={handleContinue}
          className={`mt-5 h-14 w-full rounded-lg text-base font-bold ${
            isFormValid
              ? "bg-blue-500 text-white"
              : "bg-[#eef0f5] text-[#7e859b]"
          }`}
        >
          CONTINUE
        </button>

        {mode === "login" && (
          <p className="mt-5 text-center text-sm text-[#404553]">
            By continuing, I confirm that I have read the{" "}
            <span className="font-bold text-blue-600">Privacy Policy</span>
          </p>
        )}
      </div>
    </div>
  );
}

function AccountRow({
  icon,
  label,
  rightText,
}: {
  icon: React.ReactNode;
  label: string;
  rightText?: string;
}) {
  return (
    <button
      onClick={() => toast("It's only a frontend demo")}
      className="flex w-full items-center justify-between border-b border-gray-100 px-4 py-5 text-[#404553] last:border-b-0"
    >
      <div className="flex items-center gap-4">
        <span className="text-xl">{icon}</span>
        <span>{label}</span>
      </div>

      <div className="flex items-center gap-3">
        {rightText && <span>{rightText}</span>}
        <BsChevronRight className="text-gray-500" />
      </div>
    </button>
  );
}
