import { Typography } from '@material-tailwind/react';
import token from '/public/Access_vs_refresh_token_blog_thumbnail.webp'
import DynamicTitle from '../../components/DynamicTitle';

const TokenDetails = () => {
  return (
    <div className="pl-10">
      <div>
        <DynamicTitle pageTitle="Blog Details" />
        <header className="">
          <div className="h-[350px]">
            <img src={token} alt="" className="w-full h-full" />
          </div>
        </header>

        <div className="shadow-md dark:bg-gray-300 border space-y-5 mx-auto px-8 py-8 lg:py-10 lg:px-10">
          <h2 className="text-3xl font-medium">
            Understanding Access Tokens and Refresh Tokens: A Guide for
            Developers
          </h2>
          <Typography variant="small">
            In today's digital landscape, security is paramount, especially when
            it comes to handling user authentication and authorization. Access
            tokens and refresh tokens are integral parts of this process,
            providing a secure way for clients to access protected resources on
            behalf of users. In this blog, we'll delve into what access tokens
            and refresh tokens are, how they work, and best practices for
            storing them on the client side.
          </Typography>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">What is Access Tokens?</h3>
            <Typography variant="small">
              An access token is a credential used by a client to access
              protected resources on behalf of a user. These resources could
              include user data, APIs, or other services. When a user logs in or
              authenticates through an authorization server, the server issues
              an access token to the client. This token contains information
              about the user's identity and permissions, typically encoded in
              JSON Web Token (JWT) format. Access tokens are short-lived and
              have an expiration time to enhance security.
            </Typography>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">What is Refresh Tokens?</h3>
            <Typography variant="small">
              While access tokens are short-lived, refresh tokens provide a way
              to obtain new access tokens without requiring the user to
              reauthenticate. When an access token expires, the client can use a
              refresh token to request a new access token from the authorization
              server. Refresh tokens are long-lived and have a longer expiration
              time compared to access tokens. They are securely stored on the
              client side and should only be exchanged with the authorization
              server.
            </Typography>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">How do they Work?</h3>
            <ol className="list-decimal">
              <li>
                <h4 className="text-lg font-medium mb-2">Authentication:</h4>
                <ul className="list-disc pl-10 mb-2">
                  <li>
                    The user authenticates with the authorization server,
                    providing their credentials.
                  </li>
                  <li>
                    Upon successful authentication, the server issues an access
                    token and a refresh token to the client.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">
                  Accessing Resources:
                </h4>
                <ul className="list-disc pl-10 mb-2">
                  <li>
                    The client includes the access token in each request to
                    access protected resources.
                  </li>
                  <li>
                    The server verifies the access token and grants access if
                    it's valid.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">Token Expiration:</h4>
                <ul className="list-disc pl-10 mb-2">
                  <li>
                    Access tokens have a short lifespan and eventually expire to
                    mitigate security risks.
                  </li>
                  <li>
                    When an access token expires, the client uses the refresh
                    token to request a new access token from the server.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">Token Refresh:</h4>
                <ul className="list-disc pl-10 mb-2">
                  <li>
                    The client sends the refresh token to the authorization
                    server.
                  </li>
                  <li>
                    If the refresh token is valid and not expired, the server
                    issues a new access token to the client.
                  </li>
                  <li>
                    The process repeats as needed, providing seamless access to
                    resources without requiring the user to log in again.
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">
              Where to Store Tokens on the Client Side?
            </h3>
            <p>
              When it comes to storing tokens on the client side, security is
              paramount. Here are some best practices:
            </p>
            <ol className="list-decimal">
              <li>
                <h4 className="text-lg font-medium mb-2">Secure Storage:</h4>
                <ul className="list-disc pl-10 mb-2">
                  <li>
                    Store tokens in a secure location such as browser storage
                    (localStorage or sessionStorage) or in-memory storage.
                  </li>
                  <li>
                    Avoid storing tokens in cookies due to potential security
                    vulnerabilities such as cross-site scripting (XSS) attacks.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">Token Rotation:</h4>
                <ul className="list-disc pl-10 mb-2">
                  <li>
                    Rotate tokens periodically to minimize the risk of token
                    theft or misuse.
                  </li>
                  <li>
                    Use techniques like short-lived access tokens and long-lived
                    refresh tokens to enhance security.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">HTTPS:</h4>
                <ul className="list-disc pl-10 mb-2">
                  <li>
                    Ensure all communications between the client and server are
                    encrypted using HTTPS to prevent eavesdropping and
                    man-in-the-middle attacks.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">Token Revocation:</h4>
                <ul className="list-disc pl-10 mb-2">
                  <li>
                    Implement token revocation mechanisms to invalidate tokens
                    if they are compromised or no longer needed.
                  </li>
                  <li>
                    Provide users with the ability to revoke access tokens and
                    refresh tokens if they suspect unauthorized access.
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          <div>
            <Typography variant="small">
              In conclusion, access tokens and refresh tokens play a crucial
              role in securing client-server communication and protecting user
              data. By understanding how they work and following best practices
              for storage and management, developers can build more secure and
              reliable applications.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenDetails