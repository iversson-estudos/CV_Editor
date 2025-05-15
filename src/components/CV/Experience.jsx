import dayjs from "dayjs";

export function Experience({ data }) {
  return (
    <>
      {data.map((item) => {
        const dateFrom = item.dateFrom
          ? dayjs(item.dateFrom).format("DD/MM/YYYY")
          : null;

        const dateTo = item.dateTo
          ? dayjs(item.dateTo).format("DD/MM/YYYY")
          : null;

        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.company}</p>
            <p>{item.experience}</p>
            {(dateFrom || dateTo) && (
              <p>
                {dateFrom || ''} {dateFrom && dateTo ? ' - ' : ''} {dateTo || ''}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}
