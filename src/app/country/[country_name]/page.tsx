import Link from "next/link";
import Country from "@/app/components/Country";

interface Params {
    country_name: string;
  }
  
  export default function CountryName({params}: {params: Params}) {
    const countries: {
        name: string;
        population: number;
        capital: string;
      }[] = [
        {
          name: "Pakistan",
          population: 235824862,
          capital: "Islamabad",
        },
        {
          name: "Iran",
          population: 91787938,
          capital: "Tehran",
        },
        {
          name: "Bangladesh",
          population: 171186372,
          capital: "Dhaka",
        },
        {
          name: "China",
          population: 1425887337,
          capital: "Beijing",
        },
        {
          name: "Japan",
          population: 123951692,
          capital: "Tokyo",
        },
      ];

      function findCountry(country_url:string){
        return countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase());
      }

      const result = findCountry(params.country_name)
    return (
      <div>

        <Country countryInfo = {result} url = {params.country_name} />
        {/* {
          result ? (
        <>  
        <h1>Country Name: {result.name}</h1>
        <h1>Country Capital:{result.capital}</h1>
        <h1>Country Population:{result.population}</h1>
        </>
          ) : (
            <h1>{params.country_name}Not Found</h1>
          )
        } */}
        <div>
        <Link href="/" style={{ margin: "10px", borderRadius: "10px", border: "2px solid black", padding: "10px", width: "150px", display: "block",backgroundColor:"#bb8fce ",color:"black",textAlign:"center" }}>Back</Link>
        </div>
      </div>
      
    );
  }  


  