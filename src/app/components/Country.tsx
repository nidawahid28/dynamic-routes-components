interface CountryInfo {
  name: string;
  population: number;
  capital: string;
}

interface CountryDetailsProps {
  countryInfo?: CountryInfo;  
  url: string;                
}



export default function CountryDetails(data:CountryDetailsProps) {
    return (
      <div>
        {data.countryInfo ? (
            <div>
                <h1>Country Name: {data.countryInfo.name}</h1>
                <h1>Country Population: {data.countryInfo.population}</h1>
                <h1>Country Capital: {data.countryInfo.capital}</h1>
                </div>
        ) : (
            <div>
               <h1>{data.url} not found</h1> 
            </div>
        )}
     </div>
    );
  }