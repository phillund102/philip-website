import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PrimeReactProvider>
			<App />
		</PrimeReactProvider>
	</StrictMode>
);
