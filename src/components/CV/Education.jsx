import dayjs from "dayjs";



export function Education({data})

{

     const dateFrom = data.dateFrom
              ? dayjs(data.dateFrom).format("DD/MM/YYYY")
              : "";
            
      const dateTo = data.dateTo
              ? dayjs(data.dateTo).format("DD/MM/YYYY")
              : "";

    return (
      <div>
       <p name='Education'>{data.course}</p>
       <p name='Education'>{data.school}</p>
       {(dateFrom || dateTo) && (
              <p>
                {dateFrom || ''} {dateFrom && dateTo ? ' - ' : ''} {dateTo || ''}
              </p>
       )}
      </div>
    );
  }