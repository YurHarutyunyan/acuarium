function createTestimotional(parent, containerId, author, commentText, imageUrl) {
    //first part of testimotional, which contains the comment
    const container = createElement("div");
    createId(container, containerId);
    container.className = "test-container";
  
   
    if (commentText) {
      const commentElement = createElement("div");
      createId(commentElement, containerId + "_Comment");
      createInnerHtml(commentElement, `<h6>${commentText}</h6>`);
      container.append(commentElement);
      commentElement.className = "comment"
    }
    
//second part of testimotional which creates new container in which are image and author name
    const container2 = createElement("div");
    createId(container2, containerId + "_Section2");
    container2.className = "image-with-name";
    container.append(container2)

    

     //inserting image to second block

     if (imageUrl) {
        const imageElement = createElement("img");
        createId(imageElement, containerId +"2" + "_Image");
        imageElement.src = imageUrl;
        container2.append(imageElement);
        imageElement.className = "imageFormat"
      }
    
    //inserting author to second block
    if (author) {
        const authorElement = createElement("div");
        createId(authorElement, containerId +"2" + "_Name");
        createInnerHtml(authorElement, `<h6>${author}</h6>`);
        container2.append(authorElement);
      }
     
     
  
    parent.append(container);
    
  }
