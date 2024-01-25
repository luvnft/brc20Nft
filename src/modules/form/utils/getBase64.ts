export function getBase64(
  file: File,
): Promise<{ path: string; filename: string;image:string }> {
  const readerFile = new FileReader();
  readerFile.readAsDataURL(file);
  return new Promise((resolve, reject) => {
    readerFile.onload = () => {
      resolve({ path: readerFile.result as string, filename: file.name,image: readerFile.result as string});
    };

    readerFile.onerror = error => {
      reject(readerFile.error);
    };
  });
}

