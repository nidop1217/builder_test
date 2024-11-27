/** @jsx jsx */
import { React, css, jsx, type IconResult, classNames, polished } from 'jimu-core'
import { Button, Icon, type ButtonProps, type ButtonSize, Tooltip } from 'jimu-ui'
import { WIDGET_ITEM_SIZES } from '../../common/consts'

export const LABEL_HEIGHT = 21
export type AvatarSize = ButtonSize

export const getItemLength = (buttonSize: AvatarSize, showLabel: boolean, shape: 'circle' | 'rectangle') => {
  let size = WIDGET_ITEM_SIZES[buttonSize]
  if (showLabel) {
    size = size + LABEL_HEIGHT
  }

  const padding = calcPadding(buttonSize, shape)
  size = size + padding * 2
  return size
}

const calcPadding = (buttonSize: AvatarSize, shape: 'circle' | 'rectangle'): number => {
  const circle = shape === 'circle'
  if (!circle) return 0
  if (buttonSize === 'sm') return 0
  if (buttonSize === 'default') return 0
  if (buttonSize === 'lg') return 0
}

interface MarkerProps {
  marker?: string
  onMarkerClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface AvatarProps extends ButtonProps {
  shape: 'circle' | 'rectangle'
}

export interface AvatarCardProps extends MarkerProps, React.HTMLAttributes<HTMLDivElement> {
  icon?: IconResult | string
  autoFlip?: boolean
  label?: string
  showLabel?: boolean
  showIndicator?: boolean
  showTooltip?: boolean
  labelGrowth?: number
  avatar: AvatarProps
  active?: boolean
  disabled?: boolean
  editDraggable?: boolean
  widgetid?: string
}

const useStyle = (size: ButtonSize, showLabel: boolean, showIndicator: boolean, shape: 'circle' | 'rectangle', labelGrowth: number) => {
  return React.useMemo(() => {
    const length = getItemLength(size, showLabel, shape)
    const width = length + labelGrowth
    const padding = calcPadding(size, shape)
    return css`
      display: flex;
      align-items:center;
      flex-direction: column;
      justify-content: ${showLabel ? 'space-around' : 'center'};
      width: 5rem !important;
      height: 5rem !important;
      .tool-drag-handler {
        cursor: auto;
      }
      .avatar {
        padding: ${padding}px;
        position: relative;
        text-align: center;
        &:hover .marker {
          visibility: visible;
        }
        .marker {
          position: absolute;
          right: 0;
          top: 0;
          padding: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-btn-sizer {
            min-width: 3rem !important;
            min-height: 3rem !important;
          }
          visibility: hidden;
        }
      }
      ${showIndicator
      ? `.avatar.active {
        .avatar-button, .marker {
          transform: translateY(-7px);
        }
        .marker {
          z-index: 1;
        }
        ::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border: 1px solid var(--ref-palette-white);
          border-radius: 3px;
          width: 6px;
          height: 3px;
          background-color: var(--sys-color-primary-main);
          box-sizing: content-box;
        }
      }`
      : ''}
      .avatar-label {
        text-align: center;
        width: 100%;
        min-height: ${polished.rem(10)};
        cursor: default;
      }
    `
  }, [size, showLabel, shape, labelGrowth, showIndicator])
}

const borderRadiuses = { none: '0', sm: '0', default: 'var(--sys-shape-1)', lg: 'var(--sys-shape-2)' }

export const AvatarCard = React.forwardRef((props: AvatarCardProps, ref: React.RefObject<HTMLButtonElement>) => {
  const {
    label,
    className,
    title,
    showLabel,
    showIndicator = true,
    showTooltip = true,
    labelGrowth = 0,
    icon,
    marker,
    onClick,
    onMarkerClick,
    avatar,
    autoFlip,
    active,
    editDraggable,
    disabled,
    widgetid,
    ...others
  } = props

  const { shape, style, ...buttonProps } = avatar || {} as AvatarProps
  const size = buttonProps?.size || 'default'
  const cssStyle = useStyle(size, showLabel, showIndicator, shape, labelGrowth)
  const buttonBorderRadius = borderRadiuses[size]

  const avatarButton = <Button
    data-widgetid={widgetid}
    icon
    active={active}
    className={classNames('avatar-button', { disabled })}
    ref={ref}
    {...buttonProps}
    style={{ borderRadius: shape === 'circle' ? '50%' : buttonBorderRadius, ...style }}
    onClick={onClick}
  >
    <Icon
    style={{ width: '24px', height: '24px' }} // 아이콘 크기 설정
      color={typeof icon !== 'string' && icon.properties?.color}
      icon={typeof icon !== 'string' ? icon.svg : icon} autoFlip={autoFlip}
    />
  </Button>

  return (
    <div
      {...others}
      className={classNames('avatar-card', `${className} avatar-card`)}
      css={cssStyle}
    >
      <div
        className={classNames({ 'no-drag-action': !editDraggable, active }, 'avatar tool-drag-handler')}
      >
        {
          marker && <Button className="marker" size="lg" icon onClick={onMarkerClick}>
            <Icon size={8} icon={marker} />
          </Button>
        }
        {showTooltip ? <Tooltip title={title || label} style={{ pointerEvents: 'none' }}>{avatarButton}</Tooltip> : avatarButton}
      </div>
      {
        showLabel &&
        <div className={classNames('avatar-label text-truncate', { active })}>{label}</div>
      }
    </div>
  )
})
