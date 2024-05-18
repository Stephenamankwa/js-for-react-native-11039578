// userInfo.js

/**
 * Function for creatiing user profiles.
 * @param {string[]} names
 * @param {string[]} modNames
 * @returns {Object[]} 
 */
function createUserProfiles(names, modNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modNames[index],
            id: index + 1
        };
    });
}
