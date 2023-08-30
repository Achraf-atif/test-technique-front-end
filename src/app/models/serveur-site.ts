export interface Server {
  id?: number; // An optional property to store the server's ID
  name: string; // The name of the server
  ipAddress: string; // The IP address of the server
  sites: Site[]; // An array of sites associated with the server
}

export interface Site {
  id?: number; // An optional property to store the site's ID
  name: string; // The name of the site
  domainName: string; // The domain name of the site
  ipAddress: string; // The IP address of the site
  active: boolean; // A boolean indicating whether the site is active or not
}
