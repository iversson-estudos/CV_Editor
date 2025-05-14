



export function PersonalInfo({data})
 {
    return (
      <div>
       <p name='personalInfo'>{data.name}</p>
       <p name='personalInfo'>{data.phone}</p>
       <p name='personalInfo'>{data.mail}</p>
       <p name='personalInfo'>{data.website}</p>
       <p name='personalInfo'>{data.nationality}</p>
       <p name='personalInfo'>{data.address}</p>
      </div>
    );
  }