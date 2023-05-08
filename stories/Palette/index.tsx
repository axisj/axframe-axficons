import useComponentNameSearch from './useComponentNameSearch';
import IconBox from './IconBox';
import 'react-toastify/dist/ReactToastify.css';
import useIconCopyClick from './useIconCopyClick';
import {
  IconGallery,
  SearchInput,
  StyledPalette,
  ToastContainer,
  toastGlobalStyles,
  Toggle,
  ToggleWrapper,
} from './styles';
import { Global } from '@emotion/react';
import { useCallback, useState } from 'react';
import { CustomizedSVGComponent } from '../../src/common/AXFIconComponent';

interface PaletteProps {
  icons: CustomizedSVGComponent[];
  pageTitle?: string;
  iconSize: number;
  color: string;
  secondColor: string;
  backgroundColor: string;
}
export const Palette = ({
  icons,
  pageTitle,
  iconSize,
  color,
  secondColor,
  backgroundColor,
}: PaletteProps) => {
  const {
    searchWord,
    onChangeSearchWord,
    filteredComponents: filteredIcons,
    setUseFuse,
  } = useComponentNameSearch<CustomizedSVGComponent>(icons);

  const { clickedIconName, copyClickedIconName } = useIconCopyClick({
    selector: '[data-role="icon-box"]',
    iconComponentNameDataSetKey: 'componentName',
  });

  const handleChangeFuse = useCallback(() => {
    setUseFuse(prev => !prev);
  }, []);

  return (
    <>
      <Global styles={toastGlobalStyles} />
      <StyledPalette>
        <header>
          <h1>AXFIcons (@axframe/axficons)</h1>
        </header>
        <section></section>
        <section>
          <header>
            <SearchInput
              value={searchWord}
              onChange={onChangeSearchWord}
              placeholder="Search icons here, click icon to copy code ..."
              autoComplete="false"
            />
            <ToggleWrapper>
              <span>Fuzzy search</span>
              <Toggle>
                <input
                  type="checkbox"
                  id="toggle"
                  onChange={handleChangeFuse}
                />
                <label htmlFor="toggle" />
              </Toggle>
            </ToggleWrapper>
          </header>
          <IconGallery onClick={copyClickedIconName}>
            {filteredIcons.map(Icon => (
              <IconBox
                key={Icon.name}
                data-role="icon-box"
                data-component-name={Icon.name}
                isClicked={clickedIconName === Icon.name}
                Icon={Icon}
                iconSize={iconSize}
                color={color}
                secondColor={secondColor}
                backgroundColor={backgroundColor}
              />
            ))}
          </IconGallery>
        </section>
      </StyledPalette>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Palette;
