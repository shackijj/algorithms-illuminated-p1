#include <gtest/gtest.h>
#include "gmock/gmock.h"
#include <qsort.hpp>

TEST(qsortTest, ArrayWithDescentElement) {
    int array[] = {3, 2, 1};
    qsort(array, 3);
    ASSERT_THAT(array, testing::ElementsAre(1, 2, 3));
}