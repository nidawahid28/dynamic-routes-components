import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      
    <h1>Country List</h1>
  
    <div style={{ display: "inline-block" }}>

      <Link href="/country/pakistan" style={{ margin: "10px", borderRadius: "10px", border: "2px solid black", padding: "10px", width: "150px", display: "block",backgroundColor:"#32CD32", color:"black" }}>Pakistan</Link>

      <Link href="country/iran" style={{ margin: "10px", borderRadius: "10px", border: "2px solid black", padding: "10px", width: "150px", display: "block",backgroundColor:"#D4AF37",color:"black" }}>Iran</Link>

      <Link href="country/bangladesh" style={{ margin: "10px", borderRadius: "10px", border: "2px solid black", padding: "10px", width: "150px", display: "block",backgroundColor:"#BCB88A",color:"black" }}>Bangladesh</Link>

      <Link href="country/china" style={{ margin: "10px", borderRadius: "10px", border: "2px solid black", padding: "10px", width: "150px", display: "block",backgroundColor:"#E78A61",color:"black" }}>China</Link>

      <Link href="country/japan" style={{ margin: "10px", borderRadius: "10px", border: "2px solid black", padding: "10px", width: "150px", display: "block",backgroundColor:"#C5908E",color:"black" }}>Japan</Link>
    </div>
  </div>
  );
}
