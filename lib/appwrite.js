import { ID, Account, Client, Avatars, Databases } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '678517c1001445fa3185',
    databaseId: '678519b2003d41075c54',
    userCollectionId: '678519f70036ee18b4c7',
    videosCollectionId: '67851a300030f694ee22',
    storageId: '67851c520009840e3f27',
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username

        )
;
        if(!newAccount) throw Error;

      const avatarUrl = avatars.getInitials(username)
      await signIn(email, password)
      const newUser = await databases.createDocument()
      Config.databaseId,
      Config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }

      return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
export const signIn = async(email, password, username) => {
    try {
      const session = await account.createEmailPasswordSession(email, password)  

      return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
      const currentAccount =  await account.get();

      if(!currentAccount) throw Error
      const currentUser = await databases.listDocuments(
        config.databaseId,
        config.userCollectionId,
        [Query.equal('accountId', currentAccount.$id)]
      ) 

      if(!currentUser) throw Error;

      return currentUser.documents[0];
    } catch (error) {
        console.log(error)
        
    }
}