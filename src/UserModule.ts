import { NativeModules } from 'react-native';
const RNBatch = NativeModules.RNBatch;

/**
 * Batch's user module
 */
export const UserModule = {
  /**
   * Get the unique installation ID, generated by Batch. Batch must be started to read it.
   * You will get the result in a promise.
   */
  getInstallationID: (): Promise<string> =>
    RNBatch.userData_getInstallationId(),

  /**
   * Set the application language. Overrides Batch's automatically detected language.
   * Send null to let Batch autodetect it again.
   * @param language Language code. 2 chars minimum, or null
   */
  setLanguage: (language?: string): void =>
    RNBatch.userData_getInstallationId(language),

  /**
   * Set the application region. Overrides Batch's automatically detected region.
   * Send "null" to let Batch autodetect it again.
   * @param region Region code. 2 chars minimum, or null
   */
  setRegion: (region?: string): void => RNBatch.userData_setRegion(region),

  /**
   * Set a custom user identifier to Batch, you should use this method if you have your own login system.
   * Be careful: Do not use it if you don't know what you are doing, giving a bad custom user ID can result
   * in failure of targeted push notifications delivery or offer delivery and restore.
   * @param identifier Your custom identifier.
   */
  setIdentifier: (identifier?: string): void =>
    RNBatch.userData_setIdentifier(identifier),

  /**
   * Set multiple attributes
   * @param attributes map of attributes
   * @param attributes.key Attribute key. Cannot be null, empty or undefined. It should be made of letters, numbers or underscores ([a-z0-9_]) and can't be longer than 30 characters.
   * @param attributes.value Attribute value. Accepted types are numbers, booleans, Date objects and strings. Strings must not be empty or longer than 64 characters.
   */
  setAttributes: (
    attributes: {
      [key: string]: string | number | null | boolean;
    }[]
  ): void => RNBatch.userData_setAttributes(attributes),

  /**
   * Set an attribute for a key
   * @param key Attribute key. Cannot be null, empty or undefined. It should be made of letters, numbers or underscores ([a-z0-9_]) and can't be longer than 30 characters.
   * @param value Attribute value. Accepted types are numbers, booleans, Date objects and strings. Strings must not be empty or longer than 64 characters.
   */
  setAttribute: (key: string, value: string | number | boolean | Date): void =>
    RNBatch.userData_setAttributes({ [key]: value }),

  /**
   * Remove an attribute
   * @param key The key of the attribute to remove
   */
  removeAttribute: (key: string): void =>
    RNBatch.userData_setAttributes({ [key]: null }),

  /**
   * Remove all attributes
   */
  clearAttributes: (): void => RNBatch.userData_clearAttributes(),

  /**
   * Add a tag to a collection. If the collection doesn't exist it will be created.
   * @param collection The tag collection name. Cannot be null or undefined. Must be a string of letters, numbers or underscores ([a-z0-9_]) and can't be longer than 30 characters.
   * @param tag The tag to add. Cannot be null, undefined or empty. Must be a string no longer than 64 characters.
   */
  addTag: (collection: string, tag: string): void =>
    RNBatch.userData_addTag(collection, tag),

  /**
   * Remove a tag
   * @param collection The tag collection name. Cannot be null or undefined. Must be a string of letters, numbers or underscores ([a-z0-9_]) and can't be longer than 30 characters.
   * @param tag The tag name. Cannot be null, empty or undefined. If the tag doesn't exist, this method will do nothing.
   */
  removeTag: (collection: string, tag: string): void =>
    RNBatch.userData_removeTag(collection, tag),

  /**
   * Removes all tags
   */
  clearTags: (): void => RNBatch.userData_clearTags(),

  /**
   * Removes all tags from a collection
   * @param collection The tag collection name. Cannot be null or undefined. Must be a string of letters, numbers or underscores ([a-z0-9_]) and can't be longer than 30 characters.
   */
  clearTagCollection: (collection: string): void =>
    RNBatch.userData_clearTagCollection(),
};
