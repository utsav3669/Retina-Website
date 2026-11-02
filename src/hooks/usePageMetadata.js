import { useEffect } from 'react';

export default function usePageMetadata(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    let descriptionElement = document.querySelector('meta[name="description"]');
    const createdDescription = !descriptionElement;

    if (!descriptionElement) {
      descriptionElement = document.createElement('meta');
      descriptionElement.setAttribute('name', 'description');
      document.head.appendChild(descriptionElement);
    }

    const previousDescription = descriptionElement.getAttribute('content');
    document.title = title;
    descriptionElement.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
      if (createdDescription) {
        descriptionElement.remove();
      } else if (previousDescription === null) {
        descriptionElement.removeAttribute('content');
      } else {
        descriptionElement.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
