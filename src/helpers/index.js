import { useRemark } from 'react-remark';
import { fetchPatchNotes } from './fetching';
import { customRenderComponents } from './markdownRendering';

const useMarkdown = () => {
  const [markdownContent, setMarkdownSource] = useRemark({
    rehypeReactOptions: customRenderComponents,
  });
  return [markdownContent, setMarkdownSource];
};

export { useMarkdown, fetchPatchNotes, customRenderComponents };
