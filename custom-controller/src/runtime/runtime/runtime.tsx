import { React, hooks } from 'jimu-core';
import { getListItemLength } from '../common/utils';
import { type IMConfig } from '../../config';
import { ScrollList } from '../common/scroll-list';
import { WidgetAvatarCard } from '../common';
import { BASE_LAYOUT_NAME } from '../../common/consts';
import { isWidgetOpening, useControlledWidgets } from '../common/layout-utils';
import WidgetsLauncher from './widgets-launcher';
import { toggleWidget } from './utils';
import { Button } from 'jimu-ui';
import btnSvgIcon from '../assets/tool-btn.svg';

export interface RuntimeProps {
  id: string;
  config: IMConfig;
  version?: number;
  autoSize?: boolean;
}

export const Runtime = (props: RuntimeProps) => {
  const { id, config, version, autoSize } = props;

  const onlyOpenOne = config.behavior?.onlyOpenOne;
  const vertical = config.behavior?.vertical;
  const card = config?.appearance?.card;
  const itemLength = getListItemLength(config?.appearance?.card as any, config?.appearance?.space);
  const mobile = hooks.useCheckSmallBrowserSizeMode();
  const rootRef = React.useRef<HTMLDivElement>(null);

  // 가시성 상태 관리
  const [isListVisible, setListVisible] = React.useState(false);

  // 위젯 데이터 가져오기
  const widgets = useControlledWidgets(id, BASE_LAYOUT_NAME);
  const widgetIds = Object.keys(widgets);
  const openingWidgets = widgetIds.filter((widgetId) => isWidgetOpening(widgets[widgetId]));

  // 위젯 열기/닫기 이벤트 핸들러
  const handleOpenWidget = React.useCallback((evt: React.MouseEvent<HTMLButtonElement>) => {
    const widgetId = evt.currentTarget.dataset?.widgetid;
    if (!widgetId) return;

    const keepOneOpened = mobile ? true : onlyOpenOne;
    if (!openingWidgets.includes(widgetId)) {
      evt.stopPropagation();
    }
    toggleWidget(id, widgetId, openingWidgets, keepOneOpened);
  }, [mobile, onlyOpenOne, openingWidgets, id]);

  // 위젯 카드 생성
  const createItem = React.useCallback((id: string, className: string) => {
    const active = openingWidgets.includes(id);
    return (
      <WidgetAvatarCard
        {...card as any}
        key={id}
        className={`${className} layout-item`}
        widgetid={id}
        markerEnabled={false}
        active={active}
        onClick={handleOpenWidget}
        // style={{ ??
        //   fontSize: '1px', // 레이블 폰트 크기
        //   width: '50px',    // 아이콘 크기
        //   height: '50px',
        // }}
      />
    );
  }, [card, handleOpenWidget, openingWidgets]);

  // 리스트 표시/숨김 토글 핸들러
  const toggleListVisibility = () => {
      setListVisible((prev) => !prev);
  };

  const setHover = () => {
      const layerListTitle = document.querySelector('.toggle-list-button')
      layerListTitle.style.border = "2px solid rgb(37, 143, 255)"
  };

  const removeHover = () => {
      const layerListTitle = document.querySelector('.toggle-list-button')
      layerListTitle.style.border = "2px solid transparent"
  }
  
  return (
    <div className="controller-runtime w-100 h-100">
      {/* 리스트 표시/숨김 버튼 */}
      <div
        className="toggle-list-button"
        onMouseEnter={setHover}
        onMouseLeave={removeHover}
        onClick={toggleListVisibility}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // padding: '10px',
          border: "2px solid transparent",
          borderRadius: '6px',
          cursor: 'pointer',
          width : "109px",
          height : "42px",
          background: `url(${btnSvgIcon})`,
        }}
      >
      </div>

      {/* WidgetsLauncher */}
      <WidgetsLauncher id={id} config={config} version={version} rootRef={rootRef} />

      {/* 위젯 리스트 */}
      {isListVisible && (
        <ScrollList
          ref={rootRef}
          className={'runtime--scroll-list'}
          vertical={vertical}
          itemLength={itemLength}
          space={config.appearance?.space}
          autoHideArrow
          autoSize={autoSize}
          lists={widgetIds}
          createItem={createItem}
        />
      )}
    </div>
  );
};
