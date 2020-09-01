import { useState, useEffect, useCallback } from 'react';
import { useStore } from 'react-redux'
import { findById, showStockStatus, findBackgroundColor } from '../../Search/Actions';
import { selectCurrency } from '../../Selectors';
import { getReviewsByProductId } from "../../Review/ApiCalls"
import { renderHook } from '@testing-library/react-hooks'