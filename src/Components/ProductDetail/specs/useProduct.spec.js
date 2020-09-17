import { useState, useEffect, useCallback } from 'react';
import { useStore } from 'react-redux'
import { findById, showStockStatus, findBackgroundColor } from '../../../Actions/search.action';
import { selectCurrency } from '../../Selectors';
import { getReviewsByProductId } from "../../Review/ApiCalls"
import { renderHook } from '@testing-library/react-hooks'