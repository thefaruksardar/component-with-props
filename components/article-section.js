export default function ArticleSection({
  heading = "No Heading",
  description = "No Description",
}) {
  return (
    <section className="px-3 py-6">
      <h1 className="text-2xl pb-3 font-semibold">{heading}</h1>
      <p className="leading-6">{description}</p>
    </section>
  );
}
