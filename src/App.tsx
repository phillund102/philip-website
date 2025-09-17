import "./App.css";
import { Button } from "primereact/button";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { useRef } from "react";
import { ContentOne } from "./ContentOne";
import { ContentTwo } from "./ContentTwo";
import { ContentThree } from "./ContentThree";

function App() {
	const stepperRef = useRef<Stepper>(null);

	const styles = {
		pageContainer: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100vh",
		},
		card: {
			display: "flex",
			justifyContent: "center",
			width: "100%",
		},
		stepperPanelContent: {
			display: "flex",
			flexDirection: "column",
			height: "12rem",
		} as const,
		contentBox: {
			border: "2px dashed #e5e7eb",
			borderRadius: "6px",
			backgroundColor: "var(--surface-color)",
			padding: "1rem",
			flexGrow: 1,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontWeight: 500,
		},
		buttonContainerEnd: {
			display: "flex",
			paddingTop: "1rem",
			justifyContent: "flex-end",
		},
		buttonContainerBetween: {
			display: "flex",
			paddingTop: "1rem",
			justifyContent: "space-between",
		},
		buttonContainerStart: {
			display: "flex",
			paddingTop: "1rem",
			justifyContent: "flex-start",
		},
	};

	return (
		<div style={styles.pageContainer}>
			<div style={styles.card}>
				<Stepper ref={stepperRef} style={{ flexBasis: "50rem" }}>
					<StepperPanel header="Product Information">
						<div style={styles.stepperPanelContent}>
							<ContentOne />
						</div>
						<div style={styles.buttonContainerEnd}>
							<Button
								label="Next"
								icon="pi pi-arrow-right"
								iconPos="right"
								onClick={() => stepperRef.current?.nextCallback()}
							/>
						</div>
					</StepperPanel>
					<StepperPanel header="Structure">
						<div style={styles.stepperPanelContent}>
							<div style={styles.contentBox}>
								<ContentTwo />
							</div>
						</div>
						<div style={styles.buttonContainerBetween}>
							<Button
								label="Back"
								severity="secondary"
								icon="pi pi-arrow-left"
								onClick={() => stepperRef.current?.prevCallback()}
							/>
							<Button
								label="Next"
								icon="pi pi-arrow-right"
								iconPos="right"
								onClick={() => stepperRef.current?.nextCallback()}
							/>
						</div>
					</StepperPanel>
					<StepperPanel header="Synonym Options">
						<div style={styles.stepperPanelContent}>
							<div style={styles.contentBox}>
								<ContentThree />
							</div>
						</div>
						<div style={styles.buttonContainerBetween}>
							<Button
								label="Back"
								severity="secondary"
								icon="pi pi-arrow-left"
								onClick={() => stepperRef.current?.prevCallback()}
							/>
							<Button
								label="Finish"
								icon="pi pi-check"
								iconPos="right"
								onClick={() => stepperRef.current?.prevCallback()}
							/>
						</div>
					</StepperPanel>
				</Stepper>
			</div>
		</div>
	);
}

export default App;
