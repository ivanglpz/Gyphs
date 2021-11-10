const useKey = (): string => {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  if (!key) throw new Error("variable mongo indefinida");
  return key;
};
export default useKey;
