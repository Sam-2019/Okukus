let content;

content = value.map(({ _id, first_name }) => (
  <div key={_id}>
    <h2> {first_name}</h2>
  </div>
));

{
  resource.loading ? (
    <>Loading </>
  ) : resource.error ? (
    <span className="text-danger">{error}</span>
  ) : (
    <>{content}</>
  );
}
