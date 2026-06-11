type ListBlockProps = {
  title: string;
  items: string[];
};

export default function ListBlock({ title, items }: ListBlockProps) {
  return (
    <section className="content-block">
      <h2>{title}</h2>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
