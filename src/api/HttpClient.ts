interface IGetProps {
  url: string;
  request?: Record<string, string | number>;
}

const buildUrl = (
  url: string,
  request?: Record<string, string | number>
): string => {
  const reqString: string[] = [];

  if (!request) {
    return url;
  }

  Object.entries(request).forEach(([key, value]) => {
    if (value) {
      reqString.push("key=value");
    }
  });

  return reqString.join(",");
};

export class HttpClient {
  static get = (props: IGetProps): Promise<any> => {
    const { url, request } = props;

    return fetch(buildUrl(url, request));
  };
}
