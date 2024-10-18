import ActiveLastBreadcrumb from "../components/common/components/Link";
import { Link } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import i18n from "../components/common/components/LangConfig";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  // Mock useEffect to fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      // Mock user data fetching
      const userData = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        address: "123 Main St",
      };
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setAddress(userData.address);
    };

    fetchUserData();
  }, []);

  const handleSaveChanges = async () => {
    try {
      // Mock saving user data
      setMessage(i18n.t("accountPage.setMessage"));
      setOpen(true);
    } catch (error) {
      setError(error.message);
      setOpen(true);
    }
  };

  return (
    <div className="flex flex-col mx-4 md:ml-36 mt-48 gap-20 justify-center md:justify-between ">
      <div className="flex justify-between flex-col gap-4 md:flex-row ">
        <ActiveLastBreadcrumb
          path={`${i18n.t("accountPage.home")}/ ${i18n.t("accountPage.myAccount")}`}
        />
        <h1 className="text-sm md:mr-44">
          {i18n.t("accountPage.welcome")}{" "}
          <span className="text-red-600">
            {firstName} {lastName}
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-28">
        <nav className="flex flex-col gap-4 text-gray-400">
          <h1 className="text-black text-sm md:text-base font-medium">
            {i18n.t("accountPage.manageMyAccount")}
          </h1>
          <ul>
            <li className="px-4 py-2">
              <Link
                to="/account"
                className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform focus:text-red-600"
              >
                {i18n.t("accountPage.myProfile")}
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/account"
                className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform focus:text-red-600"
              >
                {i18n.t("accountPage.addressBook")}
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/account"
                className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform focus:text-red-600"
              >
                {i18n.t("accountPage.myPaymentOptions")}
              </Link>
            </li>
          </ul>
          <h1 className="text-black text-sm md:text-base font-medium">
            {i18n.t("accountPage.myOrders")}
          </h1>
          <ul>
            <li className="px-4 py-2">
              <Link
                to="/account"
                className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform focus:text-red-600"
              >
                {i18n.t("accountPage.myReturns")}
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/account"
                className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform focus:text-red-600"
              >
                {i18n.t("accountPage.myCancelations")}
              </Link>
            </li>
          </ul>
          <h1 className="text-black text-sm md:text-base font-medium">
            <Link
              to="/wishlist"
              className="hover:underline hover:underline-offset-8 ease-in-out duration-300 transform "
            >
              {i18n.t("accountPage.myWishlist")}
            </Link>
          </h1>
        </nav>
        <div className="shadow w-full flex flex-col py-10 md:px-20 px-5 rounded">
          <div className="flex flex-col gap-6 md:w-[710px]">
            <span className="text-xl font-medium text-red-600">
              {i18n.t("accountPage.editYourProfile")}
            </span>
            <div className="flex flex-col md:flex-row gap-6 md:gap-[50px] justify-between">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm md:text-base ">
                  {i18n.t("accountPage.firstName")}
                </span>
                <input
                  type="text"
                  placeholder={firstName || "your first name"}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm md:text-base ">Last Name</span>
                <input
                  type="text"
                  placeholder={lastName || "your last name"}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-[50px] justify-between">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm md:text-base ">
                  {i18n.t("accountPage.email")}
                </span>
                <input
                  type="email"
                  placeholder={email || "your email"}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm md:text-base ">
                  {i18n.t("accountPage.address")}
                </span>
                <input
                  type="address"
                  placeholder={address || "your address"}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <span className="text-sm md:text-base ">
                {i18n.t("accountPage.passwordChanges")}
              </span>
              <input
                type="password"
                placeholder={i18n.t("accountPage.currentPassword")}
                required
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
              />
              <input
                type="password"
                placeholder={i18n.t("accountPage.newPassword")}
                required
                onChange={(e) => setNewPassword(e.target.value)}
                className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
              />
              <input
                type="password"
                placeholder={i18n.t("accountPage.confirmPassword")}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-400 text-sm md:text-base focus:border outline-none focus:border-gray-300"
              />
            </div>
            <div className="ml-auto flex items-center gap-8 text-sm md:text-base ">
              {/* Cancel and save changes buttons */}
              <button
                onClick={() => {
                  // Reset form values
                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setAddress("");
                  setCurrentPassword("");
                  setNewPassword("");
                  setConfirmPassword("");
                }}
                className="rounded py-4 px-4 w-full md:w-48 bg-gray-100 text-red-600 text-sm font-medium md:text-base outline-none border-none hover:bg-red-100 ease-in-out duration-300"
              >
                {i18n.t("accountPage.cancel")}
              </button>
              <button
                onClick={handleSaveChanges}
                className="rounded py-4 px-4 w-full md:w-48 bg-red-600 text-white text-sm font-medium md:text-base outline-none border-none hover:bg-red-700 ease-in-out duration-300"
              >
                {i18n.t("accountPage.saveChanges")}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Snackbar for messages */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={error ? "error" : "success"}
        >
          {error || message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Account;
