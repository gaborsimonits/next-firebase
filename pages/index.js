import Head from "next/head";
import styles from "../styles/Home.module.css";

import Loader from "../components/Loader";

import toast from "react-hot-toast";

const toastMsgs = [
	"A relaxed mind is a creative mind.",
	"Act, don't react.",
	"Provoke, confront, elevate.",
	"Your word is your greatest power.",
	"To know others is smart. To know yourself is wise.",
	"Without you the universe is not beautiful.",
	"Use your head to live with heart.",
	"Speak the truth, spread the gospel.",
];

const getRandomMsg = () => {
	let random = Math.floor(Math.random() * toastMsgs.length);
	return toastMsgs[random];
};

export default function Home() {
	return (
		<div>
			<Loader className={styles.loader} show />

			<button onClick={() => toast.success(getRandomMsg())}>Tell me!</button>
		</div>
	);
}
