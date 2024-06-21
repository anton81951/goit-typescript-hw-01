import axios from 'axios';

async function fetchData<T>(url: string): Promise<{data: T}> {
  try {
    const response = await axios.get<T>(url);
    return {data: response.data}
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}