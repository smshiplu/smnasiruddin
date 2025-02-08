export const getAllTestimonial = async () => {
  try {
    const requestData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/testimonials`, requestData);
    if(!response.ok) {
      throw({message: response.statusText, status: response.status}); //eslint-disable-line
    }
    const data = await response.json();
    return data;

  } catch (error) {
    throw new Error(error);
  }
}