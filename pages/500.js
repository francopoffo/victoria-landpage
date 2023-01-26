import ErrorPage from "../src/components/ErrorPages/ErrorPage";

export default function Custom505() {
  return <ErrorPage error={"500 error - Server-side error occurred"} />;
}
