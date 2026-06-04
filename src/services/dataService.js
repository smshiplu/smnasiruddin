
export const getAllData = async () => {
  try {
    const response = await fetch(`./data/db.json`);
    
    if(!response.ok) {
      throw({ message: response.statusText, status: response.status }); //eslint-disable-line
    }
    const data = await response.json();
    return data;
    
  } catch (error) {
    throw new Error(error);
  }
}
