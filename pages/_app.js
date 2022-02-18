import "../styles/globals.css";
import Navbar from "../components/Navbar";

import { UserContext } from "../lib/context";
import { Toaster } from "react-hot-toast";

// import { GetServerSideProps } from "next/app";

function MyApp({ Component, pageProps }) {
	return (
		// user: {}, username: "Arnot"
		<UserContext.Provider value={{ user: {}, username: "Arnot" }}>
			<Navbar />
			<Component {...pageProps} />
			<Toaster />
		</UserContext.Provider>
	);
}

export default MyApp;
