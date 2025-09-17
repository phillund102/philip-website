import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";

export function ContentOne() {
	const style = {
		contentBox: {
			border: "2px dashed #e5e7eb",
			borderRadius: "6px",
			backgroundColor: "var(--surface-color)",
			padding: "1rem",
			flexGrow: 1,
			display: "flex",
			flexDirection: "column",
			justifyContent: "start",
			alignItems: "center",
			fontWeight: 500,
		},
	};

	return (
		<div style={style.contentBox}>
			<FloatLabel>
				<InputText
					id="productName"
					value={undefined}
					onChange={(e: any) => console.log(e.target.value)}
				/>
				<label htmlFor="productName">Product Name</label>
			</FloatLabel>
			<FloatLabel>
				<InputText
					id="productRevision"
					value={undefined}
					onChange={(e: any) => console.log(e.target.value)}
				/>
				<label htmlFor="productRevision">Revision</label>
			</FloatLabel>
		</div>
	);
}
