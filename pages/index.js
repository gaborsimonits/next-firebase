import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Loader from "../components/Loader";

import toast from "react-hot-toast";

export default function Home() {
	return (
		<div>
			<Loader className={styles.loader} show />

			<button onClick={() => toast.success("hi toast")}>Toast Me</button>
		</div>
	);
}
